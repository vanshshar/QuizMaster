import { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { Question } from '../data/quizData';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswerSubmit: (selectedAnswer: number) => void;
  onNext: () => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswerSubmit,
  onNext
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelectAnswer = (index: number) => {
    if (!submitted) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setSubmitted(true);
      onAnswerSubmit(selectedAnswer);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setSubmitted(false);
    onNext();
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-3xl w-full">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
            Question {questionNumber} of {totalQuestions}
          </span>
          <div className="flex gap-2">
            {Array.from({ length: totalQuestions }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index < questionNumber - 1
                    ? 'bg-green-500'
                    : index === questionNumber - 1
                    ? 'bg-blue-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectAnswer = index === question.correctAnswer;
          const showCorrect = submitted && isCorrectAnswer;
          const showIncorrect = submitted && isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => handleSelectAnswer(index)}
              disabled={submitted}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                showCorrect
                  ? 'border-green-500 bg-green-50'
                  : showIncorrect
                  ? 'border-red-500 bg-red-50'
                  : isSelected
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              } ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold ${
                      showCorrect
                        ? 'bg-green-500 text-white'
                        : showIncorrect
                        ? 'bg-red-500 text-white'
                        : isSelected
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-gray-800 font-medium">{option}</span>
                </div>
                {showCorrect && <CheckCircle className="w-6 h-6 text-green-500" />}
                {showIncorrect && <XCircle className="w-6 h-6 text-red-500" />}
              </div>
            </button>
          );
        })}
      </div>

      {submitted && (
        <div
          className={`mb-6 p-4 rounded-xl ${
            isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'
          }`}
        >
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            )}
            <div>
              <h3 className={`font-bold mb-1 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              selectedAnswer !== null
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            {questionNumber < totalQuestions ? 'Next Question' : 'View Results'}
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
