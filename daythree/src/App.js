import React, {useState} from 'react'
import Icon from './Components/Icon';
import './index.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';


const tiktacArray = new Array(9).fill("A")
const App=()=> {
    let[isCross,setIsCross]= useState(true)
    let [winMessage,setWinMessage]=useState("")
    const playAgain =()=>{
          setIsCross(true)
          setWinMessage("")
          tiktacArray.fill("")
    }
    const findWinner=()=>{
      // i am not able to complete logic 

    }
  return (
    <>
       <Icon choice="cross"/>
    </>
  );
}

export default App;
