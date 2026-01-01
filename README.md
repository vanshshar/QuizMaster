# QuizMaster - Interactive Quiz Application

A modern, production-ready quiz application built with React.js, TypeScript, and Tailwind CSS. This application allows users to test their knowledge across multiple categories with an engaging and responsive interface.

## Features

### Core Features
- **User Authentication**: Enter your name to start (stored in localStorage)
- **Multiple Quiz Categories**:
  - JavaScript Fundamentals (8 questions)
  - React Essentials (8 questions)
  - General Knowledge (8 questions)
  - Web Development (8 questions)
- **Interactive Quiz Experience**:
  - One question at a time
  - Multiple choice answers
  - Immediate feedback after each answer
  - Detailed explanations for each question
- **Progress Tracking**:
  - View total quizzes attempted
  - Track highest score achieved
  - See last attempt score
- **Comprehensive Results**:
  - Score percentage
  - Correct/wrong answer breakdown
  - Detailed question review with answers
- **Persistent Storage**: All quiz attempts and user data saved in localStorage

### UI/UX Features
- Clean, modern interface
- Fully responsive (mobile, tablet, desktop)
- Smooth transitions between screens
- Accessible design with keyboard navigation
- Color-coded feedback (green for correct, red for incorrect)
- Progress indicators during quiz

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Storage**: Browser localStorage
- **State Management**: React Hooks (useState, useEffect)

## Project Structure

```
src/
├── components/
│   ├── NameInput.tsx       # User name entry screen
│   ├── Dashboard.tsx       # Main dashboard with categories and stats
│   ├── Quiz.tsx            # Quiz container and flow management
│   ├── QuestionCard.tsx    # Individual question display with feedback
│   └── Result.tsx          # Results page with detailed breakdown
├── data/
│   └── quizData.ts         # Quiz questions and answers database
├── utils/
│   └── localStorageHelper.ts  # localStorage management utilities
├── App.tsx                 # Main app component with routing logic
├── main.tsx               # App entry point
└── index.css              # Global styles and Tailwind imports
```

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps to Run

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## How It Works

### 1. User Flow
1. **Name Entry**: User enters their name on the welcome screen
2. **Dashboard**: View quiz categories, statistics, and recent attempts
3. **Quiz**: Take a quiz one question at a time
4. **Feedback**: Receive immediate feedback after each answer
5. **Results**: View comprehensive results and review all questions

### 2. State Management
The app uses React hooks for state management:
- `useState`: Manages current screen, user data, and quiz progress
- `useEffect`: Loads saved user name from localStorage on mount

### 3. Data Persistence
All data is stored in browser localStorage:
- **User Name**: Persists across sessions
- **Quiz Attempts**: Full history with answers and scores
- **Statistics**: Calculated from attempt history

### 4. Component Architecture

#### NameInput Component
- Validates user input (minimum 2 characters)
- Saves name to localStorage
- Navigates to dashboard on submit

#### Dashboard Component
- Displays user statistics (total attempts, highest score, last score)
- Shows all available quiz categories
- Lists recent quiz attempts in a table
- Provides logout functionality

#### Quiz Component
- Manages quiz flow and state
- Tracks current question index
- Collects user answers
- Passes data to Result component on completion

#### QuestionCard Component
- Displays one question at a time
- Handles answer selection
- Shows immediate feedback with explanation
- Highlights correct answer
- Provides next question button

#### Result Component
- Shows overall score and statistics
- Provides performance message based on score
- Lists all questions with user answers
- Offers options to return to dashboard or retake quiz

### 5. LocalStorage Helper Functions
- `getUserName()`: Retrieves saved user name
- `setUserName()`: Saves user name
- `getQuizAttempts()`: Fetches all quiz attempts
- `saveQuizAttempt()`: Saves a new quiz attempt
- `getUserStats()`: Calculates statistics from attempts

## Customization

### Adding New Quizzes
Edit `src/data/quizData.ts` and add a new quiz object:

```typescript
{
  id: 'unique-id',
  title: 'Quiz Title',
  description: 'Quiz description',
  icon: '🎯',
  questions: [
    {
      id: 1,
      question: 'Your question?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 0, // Index of correct answer (0-3)
      explanation: 'Explanation of the answer'
    }
  ]
}
```

### Modifying Styles
- Global styles: `src/index.css`
- Component styles: Inline Tailwind classes
- Color scheme: Update gradient colors in components

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- No unnecessary re-renders (proper state management)
- Efficient localStorage operations
- Lazy loading ready (can be implemented for larger quiz sets)
- Optimized build with Vite

## Future Enhancements

Potential features for future versions:
- Timer for quizzes
- Different difficulty levels
- Leaderboard functionality
- Share results on social media
- Export results as PDF
- Dark mode theme
- Multi-language support
- Backend integration for global leaderboards

## License

This project is open source and available for educational purposes.

## Author

Built with React.js, TypeScript, and Tailwind CSS.
