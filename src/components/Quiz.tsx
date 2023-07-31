import { useState } from "react"

import { questions } from "../constants";

import question1 from '../assets/q1.jpeg';
import question2 from '../assets/q2.jpeg';
import question3 from '../assets/q3.png';
import question4 from '../assets/q4.png';
import question5 from '../assets/q5.png';
import question6 from '../assets/q6.png';
import question7 from '../assets/q7.jpeg';
import question8 from '../assets/q8.png';

import "./Quiz.css"

const questionsImages = [question1,question2,question3,question4,question5,question6,question7,question8]


function Quiz() {
    const [takingQuiz, setTakingQuiz] = useState(1)
    const [questionAnswered, setQuestionAnswered] = useState(0)
    const [totalAnwered, setTotalAnswered] = useState(1)
    const [correctAnswer, setCorrectAnswer] = useState(1)
    const [showColors, setShowColors] = useState(0)

    const [nextOrResult, setNextOrResult] = useState("Next")
    const [resultsText, setResultsText] = useState("Practice what you learned!")

    const [totalRight, setTotalRight] = useState(0)

    const nextQuestion = () =>{
        if(totalAnwered != questions.length){
            setTotalAnswered(totalAnwered => totalAnwered+1);
            setQuestionAnswered(0)
            setShowColors(0)
            setCorrectAnswer(questions[totalAnwered].answer)
        }
        else{
            setTakingQuiz(1)
            setResultsText(`You got ${totalRight} out of ${questions.length} questions correctly`)
            setTotalAnswered(1)
            setCorrectAnswer(1)
            setTotalRight(0);
            setQuestionAnswered(0);
            setShowColors(0)
            setNextOrResult("Next")
        }
    }

    const showAnswer = (guess:number) => {
        setShowColors(1)
        if (guess != correctAnswer){
            setTotalRight(totalRight => totalRight+1)
        }
        setTimeout(() =>{
            if(totalAnwered == questions.length){
                setNextOrResult("Show Results")
            }
            setQuestionAnswered(1)
        },2000)
    }

    return (
        <div className="py-[100px] bg-[#f1f1f1] flex justify-center items-center">
        {
            takingQuiz ? 
            <div className="flex flex-col flex-nowrap justify-center items-center gap-[30px]">
                <h1 className="font-bold text-[40px]">{resultsText}</h1>
                <div onClick={() => setTakingQuiz(0)} className="cursor-pointer bg-[red] p-[10px] text-[#f1f1f1] rounded-[20px] text-[20px] max-w-[112px]">Take Quiz!</div>
            </div>
        :
            <div className="w-[100vw] h-[70vh] px-[5%] flex">
                <div className="grow  flex flex-col">
                    <div className="min-h-[75px] flex items-center pl-[20px]">
                        <h1 className="grow basis-0 shrink-0 text-[30px] font-bold">Question {totalAnwered}</h1>
                        <h1 className="grow basis-0 shrink-0 text-[30px] font-bold justify-center items-center flex">{totalAnwered}/8</h1>
                        <div onClick={() => !questionAnswered ? "" : nextQuestion()}style={!questionAnswered ? {color:"gray"} : {color: "black"}} className="cursor-pointer grow basis-0 shrink-0 text-[30px] font-bold justify-center flex items-center">{nextOrResult}</div>
                    </div>
                    <div className="grow flex">
                        <div className="grow p-[10px] pt-[40px] flex basis-0 shrink-0">
                            <div style={{backgroundImage: `url(${questionsImages[totalAnwered-1]})`}} className="grow rounded-[20px] bg-contain bg-no-repeat bg-center"></div>
                        </div>
                        <div className="grow p-[10px] flex basis-0 shrink-0">
                            <div className=" grow rounded-[20px] flex flex-col">
                                <div className="grow px-[10%] flex justify-center items-center flex-col gap-[10px]">
                                    {questionAnswered ?
                                    <>
                                        <div className="h-[20%] items-center justify-center flex flex-col gap-[20px] mt-[20px]">
                                            <h1 className="font-bold text-[25px]">{questions[totalAnwered-1].question}</h1>
                                            <div className="w-[70%] h-[5px] bg-[black]"/>
                                        </div>
                                        <div className="grow px-[10%] flex justify-center items-center flex-col gap-[10px]">
                                            <p className="text-[20px]">{questions[totalAnwered-1].explanation}</p>
                                        </div>
                                    </>
                                    :
                                    <div className="grow w-[100%] px-[10%] flex justify-center items-center flex-col gap-[30px]">
                                        <div onClick={()=>showAnswer(0)} className={`selectionButton ${!showColors ? 'normalSelectionButton' : (correctAnswer == 1) ? "correctSelectionButton" : "incorrectSelectionButton"}`}>True</div>
                                        <div onClick={()=>showAnswer(1)} className={`selectionButton ${!showColors ? 'normalSelectionButton' : (correctAnswer != 1) ? "correctSelectionButton" : "incorrectSelectionButton"}`}>False</div>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}

export default Quiz