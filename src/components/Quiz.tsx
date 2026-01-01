import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Quiz as QuizType } from '../data/quizData';
import QuestionCard from './QuestionCard';

interface QuizProps {
  quiz: QuizType;
  userName: string;
  onComplete: (answers: Answer[]) => void;
  onBack: () => void;
}

export interface Answer {
  questionId: number;
  question: string;
  userAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
}

export default function Quiz({ quiz, userName, onComplete, onBack }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  const handleAnswerSubmit = (selectedAnswer: number) => {
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      userAnswer: selectedAnswer,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect: selectedAnswer === currentQuestion.correctAnswer
    };

    setAnswers([...answers, newAnswer]);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const allAnswers = [...answers];
      onComplete(allAnswers);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (window.confirm('Are you sure you want to exit? Your progress will be lost.')) {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl mb-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>
      </div>

      <div className="mb-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          {quiz.icon} {quiz.title}
        </h1>
        <p className="text-gray-600">
          Good luck, <span className="font-semibold">{userName}</span>!
        </p>
      </div>

      <QuestionCard
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={quiz.questions.length}
        onAnswerSubmit={handleAnswerSubmit}
        onNext={handleNext}
      />
    </div>
  );
}
