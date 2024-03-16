import { useState } from "react";
import Ticket from "./Ticket";

export default function LotteryGame(){

    let [ticketNumber, setTicketNumber] = useState(0);
    let [isFifteen, setIsFifteen] = useState(false);

    let generateTicket = () => {
        console.log("I will generate a ticket here for three digits");
        let onesDigit = Math.floor(Math.random()*10);
        let tensDigit = Math.floor(Math.random()*10);
        let hundredDigit = Math.floor(Math.random()*10);

        console.log(onesDigit, tensDigit, hundredDigit);
        setTicketNumber((ticketNumber) => {
            ticketNumber = onesDigit*1+tensDigit*10+hundredDigit*100;
            return ticketNumber;
        })
        onesDigit+tensDigit+hundredDigit == 15 ? setIsFifteen(true) : false;
    }

    return(
        <>
            <h1>Lottery Game</h1>
            <h2> <Ticket num={3} /> </h2>
            <button onClick={generateTicket}>Generate Ticket</button>
            {isFifteen ? <p>Congratulations, You Won!</p> : <p>Give it another go</p>}
        </>
    );
};  