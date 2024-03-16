import TicketNum from "./TicketNum"

export default function Ticket({ticket=[1,2,3,4,5]}){
    return (
        <div>
            {ticket.map((num, idx) => ( <TicketNum num={num} key={idx} /> ))}
        </div>
    )
}