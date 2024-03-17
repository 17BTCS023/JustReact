import { useState } from "react";
import Ticket from "./Ticket";
import { genTicket, sum } from "./helper.js";

export default function LotteryGame({n=3 , winCondition}){

    let [ticketNumber, setTicketNumber] = useState(genTicket(n));
    let isWinning = winCondition(ticketNumber);

    let buyTicket = () => {
        setTicketNumber(genTicket(n));
    }

    return(
        <>
            <h1>Lottery Game</h1>
            <h2> <Ticket ticket={ticketNumber} /> </h2>
            <button onClick={buyTicket}>Generate Ticket</button>
            {isWinning ? <p>Congratulations, You Won!</p> : <p>Give it another go</p>}
        </>
    );
};