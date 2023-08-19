import { useState } from 'react';
import './App.css';
''
function App() {

  const questions = [
    {
      textQuestions: 'Qual a capital de minas gerais?',
      optionQuestions: [
        {answer:'SP', isCorrect:false},
        {answer:'RJ', isCorrect:false},
        {answer:'BH', isCorrect:true},
        {answer:'VT', isCorrect:false}
      ]
    },
    {
      textQuestions: 'Qual a capital de Mato grosso?',
      optionQuestions: [
        {answer:'SP', isCorrect:false},
        {answer:'RJ', isCorrect:false},
        {answer:'BH', isCorrect:false},
        {answer:'CB', isCorrect:true}
      ]
    },
    {
      textQuestions: 'Qual a capital de Rio de Janeiro?',
      optionQuestions: [
        {answer:'SP', isCorrect:false},
        {answer:'Rio', isCorrect:true},
        {answer:'BH', isCorrect:false},
        {answer:'VT', isCorrect:false}
      ]
    },
    {
      textQuestions: 'Qual a capital de bahia?',
      optionQuestions: [
        {answer:'SP', isCorrect:false},
        {answer:'RJ', isCorrect:false},
        {answer:'BH', isCorrect:false},
        {answer:'SVD', isCorrect:true}
      ]
    }
  ]

  const [question, setQuestion] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [correct, setCorrect] = useState(0);

  const handleButtonAnswer = (isCorrect) =>{

    if(isCorrect === true){
      setCorrect(correct + 1);
    }

    const nextQuestion = question + 1;
    if (nextQuestion < questions.length) {
      setQuestion(nextQuestion);
    }else{
      setIsDone(true);
    }

  }

  return (
    <div className="App">
      {isDone ? (
              <div className='result-section'>
                <span>Você acertou {correct} de {questions.length} questoes</span>
              </div>
      ) : (
        <>
          <div className='question-section'>
              <span>{question+1}/{questions.length}</span>
              <h2>{questions[question].textQuestions}</h2>
          </div>
          <div className='asnwer-section'>
              {questions[question].optionQuestions.map((optionQuestion, index) => (
              <button onClick={()=>handleButtonAnswer(optionQuestion.isCorrect)}>{optionQuestion.answer}</button>))}    
          </div>
        </>
      )}
    </div>
  );
}
export default App;
