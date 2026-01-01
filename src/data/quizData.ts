export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: Question[];
}

export const quizzes: Quiz[] = [
  {
    id: 'javascript',
    title: 'JavaScript Fundamentals',
    description: 'Test your knowledge of core JavaScript concepts',
    icon: '💻',
    questions: [
      {
        id: 1,
        question: 'What is the output of: typeof null?',
        options: ['null', 'undefined', 'object', 'number'],
        correctAnswer: 2,
        explanation: 'typeof null returns "object" due to a legacy bug in JavaScript that has been kept for compatibility reasons.'
      },
      {
        id: 2,
        question: 'Which method is used to add elements to the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 0,
        explanation: 'The push() method adds one or more elements to the end of an array and returns the new length.'
      },
      {
        id: 3,
        question: 'What does the "===" operator do?',
        options: ['Compares values only', 'Compares types only', 'Compares both value and type', 'Assigns a value'],
        correctAnswer: 2,
        explanation: 'The strict equality operator (===) checks both the value and the type without type coercion.'
      },
      {
        id: 4,
        question: 'Which keyword is used to declare a block-scoped variable?',
        options: ['var', 'let', 'const', 'Both let and const'],
        correctAnswer: 3,
        explanation: 'Both let and const are block-scoped. var is function-scoped, while let and const are block-scoped.'
      },
      {
        id: 5,
        question: 'What is a closure in JavaScript?',
        options: [
          'A function with no return value',
          'A function that has access to its outer function scope',
          'A method to close browser windows',
          'A way to end a loop'
        ],
        correctAnswer: 1,
        explanation: 'A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.'
      },
      {
        id: 6,
        question: 'What will console.log(0.1 + 0.2 === 0.3) output?',
        options: ['true', 'false', 'undefined', 'NaN'],
        correctAnswer: 1,
        explanation: 'Due to floating-point precision issues, 0.1 + 0.2 equals 0.30000000000000004, not exactly 0.3.'
      },
      {
        id: 7,
        question: 'Which array method creates a new array with all elements that pass a test?',
        options: ['map()', 'filter()', 'reduce()', 'forEach()'],
        correctAnswer: 1,
        explanation: 'The filter() method creates a new array with all elements that pass the test implemented by the provided function.'
      },
      {
        id: 8,
        question: 'What is the purpose of the "use strict" directive?',
        options: [
          'Makes code run faster',
          'Enables strict mode for safer JavaScript',
          'Declares strict types',
          'Forces type checking'
        ],
        correctAnswer: 1,
        explanation: '"use strict" enables strict mode, which catches common coding errors and prevents the use of problematic JavaScript features.'
      }
    ]
  },
  {
    id: 'react',
    title: 'React Essentials',
    description: 'Master the fundamentals of React.js',
    icon: '⚛️',
    questions: [
      {
        id: 1,
        question: 'What is JSX?',
        options: [
          'A JavaScript library',
          'A syntax extension for JavaScript',
          'A CSS framework',
          'A database query language'
        ],
        correctAnswer: 1,
        explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.'
      },
      {
        id: 2,
        question: 'Which hook is used to manage state in functional components?',
        options: ['useEffect', 'useState', 'useContext', 'useReducer'],
        correctAnswer: 1,
        explanation: 'useState is the primary hook for managing state in functional React components.'
      },
      {
        id: 3,
        question: 'What is the purpose of useEffect?',
        options: [
          'To manage component state',
          'To perform side effects in functional components',
          'To create context',
          'To optimize rendering'
        ],
        correctAnswer: 1,
        explanation: 'useEffect allows you to perform side effects like data fetching, subscriptions, or manually changing the DOM in functional components.'
      },
      {
        id: 4,
        question: 'What does React.memo() do?',
        options: [
          'Memoizes component state',
          'Prevents unnecessary re-renders of components',
          'Stores data in memory',
          'Creates context providers'
        ],
        correctAnswer: 1,
        explanation: 'React.memo() is a higher order component that memoizes a component, preventing re-renders if props haven\'t changed.'
      },
      {
        id: 5,
        question: 'What is the Virtual DOM?',
        options: [
          'A copy of the real DOM kept in memory',
          'A browser API',
          'A CSS concept',
          'A database structure'
        ],
        correctAnswer: 0,
        explanation: 'The Virtual DOM is a lightweight copy of the actual DOM kept in memory. React uses it to optimize updates to the real DOM.'
      },
      {
        id: 6,
        question: 'How do you pass data from parent to child component?',
        options: ['Using state', 'Using props', 'Using context', 'Using refs'],
        correctAnswer: 1,
        explanation: 'Props are used to pass data from parent components to child components in React.'
      },
      {
        id: 7,
        question: 'What is the correct way to update state that depends on previous state?',
        options: [
          'setState(newValue)',
          'setState(prevState => newValue)',
          'setState(prevState => prevState + 1)',
          'Both B and C'
        ],
        correctAnswer: 3,
        explanation: 'When updating state based on previous state, you should use the functional form: setState(prevState => ...) to ensure you\'re working with the latest state.'
      },
      {
        id: 8,
        question: 'What is prop drilling?',
        options: [
          'A performance optimization technique',
          'Passing props through multiple component layers',
          'A debugging method',
          'A state management pattern'
        ],
        correctAnswer: 1,
        explanation: 'Prop drilling is when you pass props through multiple layers of components to reach a deeply nested component that needs the data.'
      }
    ]
  },
  {
    id: 'general',
    title: 'General Knowledge',
    description: 'Test your general knowledge across various topics',
    icon: '🌍',
    questions: [
      {
        id: 1,
        question: 'What is the largest planet in our solar system?',
        options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
        correctAnswer: 2,
        explanation: 'Jupiter is the largest planet in our solar system, with a mass more than twice that of all other planets combined.'
      },
      {
        id: 2,
        question: 'Who painted the Mona Lisa?',
        options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
        correctAnswer: 1,
        explanation: 'Leonardo da Vinci painted the Mona Lisa in the early 16th century. It is one of the most famous paintings in the world.'
      },
      {
        id: 3,
        question: 'What is the capital of Australia?',
        options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
        correctAnswer: 2,
        explanation: 'Canberra is the capital city of Australia. Many people mistakenly think it\'s Sydney or Melbourne.'
      },
      {
        id: 4,
        question: 'How many continents are there?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 2,
        explanation: 'There are 7 continents: Africa, Antarctica, Asia, Australia, Europe, North America, and South America.'
      },
      {
        id: 5,
        question: 'What is the smallest unit of life?',
        options: ['Atom', 'Molecule', 'Cell', 'Organ'],
        correctAnswer: 2,
        explanation: 'The cell is the smallest unit of life. All living organisms are composed of one or more cells.'
      },
      {
        id: 6,
        question: 'In what year did World War II end?',
        options: ['1943', '1944', '1945', '1946'],
        correctAnswer: 2,
        explanation: 'World War II ended in 1945 with the surrender of Japan in September, following Germany\'s surrender in May.'
      },
      {
        id: 7,
        question: 'What is the chemical symbol for gold?',
        options: ['Go', 'Gd', 'Au', 'Ag'],
        correctAnswer: 2,
        explanation: 'The chemical symbol for gold is Au, derived from the Latin word "aurum" meaning gold.'
      },
      {
        id: 8,
        question: 'How many bones are in the adult human body?',
        options: ['186', '206', '226', '246'],
        correctAnswer: 1,
        explanation: 'The adult human body has 206 bones. Babies are born with about 270 bones, but many fuse together as they grow.'
      }
    ]
  },
  {
    id: 'webdev',
    title: 'Web Development',
    description: 'Challenge yourself with web development concepts',
    icon: '🌐',
    questions: [
      {
        id: 1,
        question: 'What does HTML stand for?',
        options: [
          'Hyper Text Markup Language',
          'High Tech Modern Language',
          'Home Tool Markup Language',
          'Hyperlinks and Text Markup Language'
        ],
        correctAnswer: 0,
        explanation: 'HTML stands for Hyper Text Markup Language. It is the standard markup language for creating web pages.'
      },
      {
        id: 2,
        question: 'Which CSS property is used to change text color?',
        options: ['text-color', 'font-color', 'color', 'text-style'],
        correctAnswer: 2,
        explanation: 'The "color" property in CSS is used to set the color of text.'
      },
      {
        id: 3,
        question: 'What is the purpose of the <head> tag in HTML?',
        options: [
          'To display the main content',
          'To contain metadata about the document',
          'To create headers',
          'To define the footer'
        ],
        correctAnswer: 1,
        explanation: 'The <head> tag contains metadata, title, links to stylesheets, scripts, and other information about the HTML document.'
      },
      {
        id: 4,
        question: 'Which HTTP method is used to submit form data?',
        options: ['GET', 'POST', 'PUT', 'Both GET and POST'],
        correctAnswer: 3,
        explanation: 'Both GET and POST can be used to submit form data. GET appends data to the URL, while POST sends it in the request body.'
      },
      {
        id: 5,
        question: 'What does CSS stand for?',
        options: [
          'Computer Style Sheets',
          'Cascading Style Sheets',
          'Creative Style Sheets',
          'Colorful Style Sheets'
        ],
        correctAnswer: 1,
        explanation: 'CSS stands for Cascading Style Sheets. It is used to style and layout web pages.'
      },
      {
        id: 6,
        question: 'Which property is used to change the background color?',
        options: ['bgcolor', 'background-color', 'color-background', 'bg-color'],
        correctAnswer: 1,
        explanation: 'The "background-color" property is used to set the background color of an element in CSS.'
      },
      {
        id: 7,
        question: 'What is the correct HTML element for the largest heading?',
        options: ['<heading>', '<h6>', '<h1>', '<head>'],
        correctAnswer: 2,
        explanation: '<h1> defines the largest and most important heading. Headings range from <h1> (largest) to <h6> (smallest).'
      },
      {
        id: 8,
        question: 'Which tag is used to create a hyperlink?',
        options: ['<link>', '<a>', '<href>', '<hyperlink>'],
        correctAnswer: 1,
        explanation: 'The <a> (anchor) tag is used to create hyperlinks in HTML.'
      }
    ]
  }
];
