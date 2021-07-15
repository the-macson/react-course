import React, {useState} from 'react'
import Icon from './Components/Icon';
import './index.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';


const a = new Array(9).fill("A")
const App=()=> {
    let[isCross,setIsCross]= useState(true)
    let [winMessage,setWinMessage]=useState("")
    const playAgain =()=>{
          setIsCross(true)
          setWinMessage("")
          a.fill("")
    }
    const findWinner=()=>{
      if(a[0]==a[1] && a[0]== a[2] && a[0]!= ""){
          setWinMessage(a[0]+ " has won")
      }
      else if(a[3]==a[4] && a[3]== a[5] && a[3]!=""){
          setWinMessage(a[3] + " has won")
      }
    else if(a[6]== a[7] && a[6]== a[8] && a[6]!=""){
      setWinMessage(a[6]+" has won")
    }
    else if (a[0]==a[3] && a[0] == a[6] && a[0]!=""){
      setWinMessage(a[0]+" has won")
    }
    else if(a[1]== a[4] && a[1]==a[7] && a[1] !=""){
      setWinMessage(a[1]+" has won")
    }
    else if(a[2]==a[5] && a[2]==a[8] && a[2] !=""){
      setWinMessage(a[2]+" has won")
    }
    else if(a[2]==a[4] && a[2] == a[6] && a[2] !=""){
       setWinMessage(a[2]+" has won")
    }
    else if(a[0] == a[4] && a[0] == a[8] && a[0]!=""){
      setWinMessage(a[0]+" has won")
    }
  }
    return (
    <>
       <Icon choice="cross"/>
    </>
  );
}

export default App;
