import { useEffect, useState } from 'react';
import { Trophy, TrendingUp, Target, LogOut, Clock } from 'lucide-react';
import { Quiz } from '../data/quizData';
import { getUserStats, getQuizAttempts, clearUserName, QuizAttempt } from '../utils/localStorageHelper';

interface DashboardProps {
  userName: string;
  quizzes: Quiz[];
  onSelectQuiz: (quizId: string) => void;
  onLogout: () => void;
}

export default function Dashboard({ userName, quizzes, onSelectQuiz, onLogout }: DashboardProps) {
  const [stats, setStats] = useState(getUserStats());
  const [recentAttempts, setRecentAttempts] = useState<QuizAttempt[]>([]);

  useEffect(() => {
    setStats(getUserStats());
    setRecentAttempts(getQuizAttempts().slice(0, 5));
  }, []);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout? Your progress is saved.')) {
      clearUserName();
      onLogout();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Welcome back, {userName}! 👋
              </h1>
              <p className="text-gray-600">
                Choose a quiz category to test your knowledge
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-6 h-6" />
                <h3 className="text-sm font-medium opacity-90">Total Quizzes</h3>
              </div>
              <p className="text-4xl font-bold">{stats.totalAttempts}</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="w-6 h-6" />
                <h3 className="text-sm font-medium opacity-90">Highest Score</h3>
              </div>
              <p className="text-4xl font-bold">{stats.highestScore}%</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6" />
                <h3 className="text-sm font-medium opacity-90">Last Score</h3>
              </div>
              <p className="text-4xl font-bold">
                {stats.lastAttemptScore > 0 ? `${stats.lastAttemptScore}%` : 'N/A'}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quizzes.map((quiz) => (
              <button
                key={quiz.id}
                onClick={() => onSelectQuiz(quiz.id)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{quiz.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{quiz.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{quiz.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600 font-medium">
                    {quiz.questions.length} Questions
                  </span>
                  <span className="text-gray-500">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {recentAttempts.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-6 h-6 text-gray-600" />
              <h2 className="text-2xl font-bold text-gray-800">Recent Attempts</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Quiz</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Score</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {recentAttempts.map((attempt) => (
                    <tr key={attempt.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-800">{attempt.quizTitle}</td>
                      <td className="py-3 px-4 text-gray-600">
                        {new Date(attempt.date).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {attempt.score}/{attempt.totalQuestions}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            attempt.percentage >= 70
                              ? 'bg-green-100 text-green-700'
                              : attempt.percentage >= 50
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {attempt.percentage}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
