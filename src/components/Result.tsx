import { Trophy, CheckCircle, XCircle, Home, RotateCcw } from 'lucide-react';
import { Answer } from './Quiz';

interface ResultProps {
  userName: string;
  quizTitle: string;
  answers: Answer[];
  onBackToDashboard: () => void;
  onRetakeQuiz: () => void;
}

export default function Result({ userName, quizTitle, answers, onBackToDashboard, onRetakeQuiz }: ResultProps) {
  const totalQuestions = answers.length;
  const correctAnswers = answers.filter(a => a.isCorrect).length;
  const wrongAnswers = totalQuestions - correctAnswers;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  const getPerformanceMessage = () => {
    if (percentage >= 90) return { message: 'Outstanding! 🎉', color: 'text-green-600' };
    if (percentage >= 70) return { message: 'Great Job! 👏', color: 'text-blue-600' };
    if (percentage >= 50) return { message: 'Good Effort! 👍', color: 'text-orange-600' };
    return { message: 'Keep Practicing! 💪', color: 'text-red-600' };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 mb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-4">
              <Trophy className="w-10 h-10 text-yellow-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Quiz Completed!
            </h1>
            <p className="text-gray-600 text-lg">
              Well done, <span className="font-semibold">{userName}</span>!
            </p>
            <p className="text-gray-500">{quizTitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-1">{percentage}%</div>
              <div className="text-sm opacity-90">Score</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-1">{correctAnswers}</div>
              <div className="text-sm opacity-90">Correct</div>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-1">{wrongAnswers}</div>
              <div className="text-sm opacity-90">Wrong</div>
            </div>
            <div className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-1">{totalQuestions}</div>
              <div className="text-sm opacity-90">Total</div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className={`text-2xl font-bold ${performance.color}`}>
              {performance.message}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBackToDashboard}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to Dashboard
            </button>
            <button
              onClick={onRetakeQuiz}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              Retake Quiz
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Question Review</h2>
          <div className="space-y-6">
            {answers.map((answer, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${
                  answer.isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  {answer.isCorrect ? (
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-3">
                      Question {index + 1}: {answer.question}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-600">Your Answer:</span>
                        <span
                          className={`text-sm font-medium ${
                            answer.isCorrect ? 'text-green-700' : 'text-red-700'
                          }`}
                        >
                          Option {String.fromCharCode(65 + answer.userAnswer)}
                        </span>
                      </div>
                      {!answer.isCorrect && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-600">Correct Answer:</span>
                          <span className="text-sm font-medium text-green-700">
                            Option {String.fromCharCode(65 + answer.correctAnswer)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
