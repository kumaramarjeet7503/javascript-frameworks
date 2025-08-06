import { useState,useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompletedLogo from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [selectedAnswer, setSelectedAns] = useState([]);
  const currQuestionIndex = selectedAnswer.length;
  const isQuizCompleted = QUESTIONS.length === selectedAnswer.length
  const timeout = 10000
  const handleAnswerSelection = useCallback(function handleAnswerSelection(userSelectedAns){
        setSelectedAns((prevAns)=>{
            return [...prevAns,userSelectedAns]
        })
  })
  if(isQuizCompleted){
    return <div id="summary">
                <img src={quizCompletedLogo}></img>
                <h1>Hurray! You have completed the quiz.</h1>
        </div>
  }
  const shuffledAns = [...QUESTIONS[currQuestionIndex].answers]
  shuffledAns.sort(()=>{Math.random() - 0.5})
  return (
    <div id="quiz">
      <div id="questions">
        <h3>{QUESTIONS[currQuestionIndex].text}</h3>
      </div>
      <div>
        <ul id="answers">
          {shuffledAns.map((ans) => {
            return (
              <li key={ans} className="answer">
                <button onClick={()=>handleAnswerSelection(ans)}>{ans}</button>
              </li>
            );
          })}
        </ul>
        <QuestionTimer timeout={timeout} onTimeout={()=>handleAnswerSelection(null)} ></QuestionTimer>
      </div>
    </div>
  );
}
