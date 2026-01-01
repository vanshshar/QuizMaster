export interface QuizAttempt {
  id: string;
  userName: string;
  quizId: string;
  quizTitle: string;
  date: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  answers: {
    questionId: number;
    question: string;
    userAnswer: number;
    correctAnswer: number;
    isCorrect: boolean;
  }[];
}

export interface UserStats {
  totalAttempts: number;
  highestScore: number;
  lastAttemptScore: number;
}

const USER_NAME_KEY = 'quiz_user_name';
const QUIZ_ATTEMPTS_KEY = 'quiz_attempts';

export const getUserName = (): string | null => {
  return localStorage.getItem(USER_NAME_KEY);
};

export const setUserName = (name: string): void => {
  localStorage.setItem(USER_NAME_KEY, name);
};

export const clearUserName = (): void => {
  localStorage.removeItem(USER_NAME_KEY);
};

export const getQuizAttempts = (): QuizAttempt[] => {
  const attempts = localStorage.getItem(QUIZ_ATTEMPTS_KEY);
  return attempts ? JSON.parse(attempts) : [];
};

export const saveQuizAttempt = (attempt: QuizAttempt): void => {
  const attempts = getQuizAttempts();
  attempts.unshift(attempt);
  localStorage.setItem(QUIZ_ATTEMPTS_KEY, JSON.stringify(attempts));
};

export const getUserStats = (): UserStats => {
  const attempts = getQuizAttempts();

  if (attempts.length === 0) {
    return {
      totalAttempts: 0,
      highestScore: 0,
      lastAttemptScore: 0
    };
  }

  const percentages = attempts.map(a => a.percentage);

  return {
    totalAttempts: attempts.length,
    highestScore: Math.max(...percentages),
    lastAttemptScore: attempts[0].percentage
  };
};

export const getQuizAttemptsByCategory = (quizId: string): QuizAttempt[] => {
  const attempts = getQuizAttempts();
  return attempts.filter(a => a.quizId === quizId);
};

export const clearAllData = (): void => {
  localStorage.removeItem(USER_NAME_KEY);
  localStorage.removeItem(QUIZ_ATTEMPTS_KEY);
};
