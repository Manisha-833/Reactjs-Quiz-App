import './App.css';
import React, { useState } from 'react';
export default function App() {
  const questions =[
    {
      questionText: 'Which of the following command is used to create react-js-app?',
      answerOptions: [
        { answerText: 'npx create-react-app aapname', isCorrect: false},
        { answerText: 'npm install crate-react-app', isCorrect: true},
        { answerText: 'npx install create-react-app-g', isCorrect: false},
        { answerText: 'install-| create-react-app', isCorrect: false},
      ],
    },
    {
      questionText: 'Which of the following is a way to handle data in React.js?',
      answerOptions: [
        { answerText: 'State & Props', isCorrect: false},
        { answerText: 'Services & Components', isCorrect: false},
        { answerText: 'State & Services', isCorrect: false},
        { answerText: 'State & Components', isCorrect: true},
      ],
    },
    {
      questionText: 'Which of the following valid component return type of React?',
      answerOptions: [
        { answerText: '5', isCorrect: true},
        { answerText: '3', isCorrect: false},
        { answerText: '2', isCorrect: false},
        { answerText: '1', isCorrect: false},
      ],
    },
    {
      questionText: 'Which of the following method is true about referring parent class in React.js?',
      answerOptions: [
        { answerText: 'self()', isCorrect: true},
        { answerText: 'inherits()', isCorrect: false},
        { answerText: 'this()', isCorrect: false},
        { answerText: 'super()', isCorrect: false},
      ],
    },
    {
      questionText: 'What is the default port number in which the application run?',
      answerOptions: [
        { answerText: '3000', isCorrect: false},
        { answerText: '8080', isCorrect: false},
        { answerText: '5000', isCorrect: true},
        { answerText: '3030', isCorrect: false},
      ],
    },
    {
      questionText: 'Which of the following is true regarding Babel?',
      answerOptions: [
        { answerText: 'Compiler', isCorrect: true},
        { answerText: 'Transpilar', isCorrect: true},
        { answerText: 'Both of the above', isCorrect: false},
        { answerText: 'None of the above', isCorrect: false},
      ],
    },
    {
      questionText: 'In React.js, how we can pass the data from one component to another in React?',
      answerOptions: [
        { answerText: 'SetState', isCorrect: true},
        { answerText: 'Render with arguments', isCorrect: true},
        { answerText: 'Props', isCorrect: false},
        { answerText: 'Props Types', isCorrect: false},
      ],
    },
    {
      questionText: 'In React.js, how we can pass the data from one component to another in React?',
      answerOptions: [
        { answerText: 'SetState', isCorrect: true},
        { answerText: 'Render with arguments', isCorrect: true},
        { answerText: 'Props', isCorrect: false},
        { answerText: 'Props Types', isCorrect: false},
      ],
    },
    {
      questionText: 'Which of the following function is true about changing the state in React.js',
      answerOptions: [
        { answerText: 'this.State{}', isCorrect: true},
        { answerText: 'this.setState', isCorrect: true},
        { answerText: 'this.setChangeState', isCorrect: false},
        { answerText: 'All of the above', isCorrect: false},
      ],
    },
    {
      questionText: 'Which of the following function is true about changing the state in React.js',
      answerOptions: [
        { answerText: 'this.State{}', isCorrect: true},
        { answerText: 'this.setState', isCorrect: true},
        { answerText: 'this.setChangeState', isCorrect: false},
        { answerText: 'All of the above', isCorrect: false},
      ],
    },
   ];

const [currentQuestion, setCurrentQuestion] = useState(0);

const [showScore, setShowScore]= useState(false);

const [score,setScore] = useState(0);

const handleAnswerButtonClick=(isCorrect) => {
  if(isCorrect){
    setScore(score+1);
  }

  const nextQuestion = currentQuestion+1;
  if(nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion);
  }
  else{
    setShowScore(true);
  }
};
return (
  <div className="app">
    {showScore ?(
      <div className='score-section'> You scored {score} out of {questions.length}</div>
    ) :(
      <>
      <div className='question-section'>
        <div className='question-count'>
          <span>Question {currentQuestion+1}</span>/{questions.length}
        </div>
      <div className='question-text'>{questions[currentQuestion].questionText}</div>
      </div>
      <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOption)=>(
        <button onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
      </div>
      </>
    )}
    </div>
  );
}