import { useState, useEffect } from 'react';
import NameInput from './components/NameInput';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { Answer } from './components/Quiz';
import { quizzes } from './data/quizData';
import { getUserName, setUserName, saveQuizAttempt } from './utils/localStorageHelper';

type Screen = 'name' | 'dashboard' | 'quiz' | 'result';

function App() {
  const [screen, setScreen] = useState<Screen>('name');
  const [userName, setUserNameState] = useState('');
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    const savedName = getUserName();
    if (savedName) {
      setUserNameState(savedName);
      setScreen('dashboard');
    }
  }, []);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setUserNameState(name);
    setScreen('dashboard');
  };

  const handleSelectQuiz = (quizId: string) => {
    setSelectedQuizId(quizId);
    setScreen('quiz');
  };

  const handleQuizComplete = (answers: Answer[]) => {
    setQuizAnswers(answers);

    const selectedQuiz = quizzes.find(q => q.id === selectedQuizId);
    if (!selectedQuiz) return;

    const correctCount = answers.filter(a => a.isCorrect).length;
    const percentage = Math.round((correctCount / answers.length) * 100);

    const attempt = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      userName,
      quizId: selectedQuiz.id,
      quizTitle: selectedQuiz.title,
      date: new Date().toISOString(),
      score: correctCount,
      totalQuestions: answers.length,
      percentage,
      answers: answers.map(a => ({
        questionId: a.questionId,
        question: a.question,
        userAnswer: a.userAnswer,
        correctAnswer: a.correctAnswer,
        isCorrect: a.isCorrect
      }))
    };

    saveQuizAttempt(attempt);
    setScreen('result');
  };

  const handleBackToDashboard = () => {
    setSelectedQuizId(null);
    setQuizAnswers([]);
    setScreen('dashboard');
  };

  const handleRetakeQuiz = () => {
    setQuizAnswers([]);
    setScreen('quiz');
  };

  const handleLogout = () => {
    setUserNameState('');
    setSelectedQuizId(null);
    setQuizAnswers([]);
    setScreen('name');
  };

  const selectedQuiz = selectedQuizId ? quizzes.find(q => q.id === selectedQuizId) : null;

  return (
    <>
      {screen === 'name' && <NameInput onSubmit={handleNameSubmit} />}

      {screen === 'dashboard' && (
        <Dashboard
          userName={userName}
          quizzes={quizzes}
          onSelectQuiz={handleSelectQuiz}
          onLogout={handleLogout}
        />
      )}

      {screen === 'quiz' && selectedQuiz && (
        <Quiz
          quiz={selectedQuiz}
          userName={userName}
          onComplete={handleQuizComplete}
          onBack={handleBackToDashboard}
        />
      )}

      {screen === 'result' && selectedQuiz && (
        <Result
          userName={userName}
          quizTitle={selectedQuiz.title}
          answers={quizAnswers}
          onBackToDashboard={handleBackToDashboard}
          onRetakeQuiz={handleRetakeQuiz}
        />
      )}
    </>
  );
}

export default App;
