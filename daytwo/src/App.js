import React,{useState} from 'react';
import './index.css'
function App() {
  let [score,setScore]=useState(0)
  return (
    <>
    <h1 className="intro">Hey this is a Counter Application</h1>
    <h3>The value of score is {score}</h3>
    <button className="button" buttonText="" onClick={()=>(score<25)? setScore(score+1) : ""} >Increment</button>
    <button className="button" buttonText="" onClick={()=>(score>0)? setScore(score-1) : ""} >Increment</button>
    <button className="button" buttonText="" onClick={()=>{setScore(score=0)}} >Increment</button>  
    </>
  );
}

export default App;
