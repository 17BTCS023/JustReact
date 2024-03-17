import { useState } from 'react'
import './App.css'
import MessageBox from './MsgBox'
import LotteryGame from './LotteryGame';
import {sum} from './helper.js'

function App() {

  let winCondition = (ticket) => {
      // return sum(ticket) === 15;
      // return ticket.every((num) => num === ticket[0]);
      return ticket[0] === 0;
  }

  return(
    <>
    {/* <MessageBox name="Manisha" textColor="red"/> */}
    <LotteryGame n={3} winCondition={winCondition}/>
    </>
  );

  // return <h4>I give myself the permission to Learn, learn whatever i want. No more holding myself from accelerating my learning journey</h4>
}

export default App
