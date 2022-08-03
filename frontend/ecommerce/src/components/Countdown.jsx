import { useEffect, useRef, useState } from "react";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${props => props.color};
    margin:0px 10px;

`;
const DatetimeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const EndTime = styled.div`
    font-size: 30px;
    font-weight: 700;
`;

const EndDate = styled.div`
    padding: 10px;
    font-size: 23px;
`;

const Timer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.size};
    padding-bottom: 10px;
`;
const TimerBlock = styled.span`
    margin-left: 4px;
    padding: 3px;
    color: white;
    background-color: black;
`;


const Countdown = ({endTime, status}) => {
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    let dateComponents = endTime.split('T');
    let datePieces = dateComponents[0].split("-");
    let timePieces = dateComponents[1].split(":");

    function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }

    let interval = useRef();
    const startTimer = () => {
        let countdownDate = new Date(endTime);
        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countdownDate - now;
            console.log(distance);

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          

            if (distance < 0){
                // Stop timer
                clearInterval(interval.current);
            } else {
                // Update timer
                setDays(pad(days));
                setHours(pad(hours));
                setMinutes(pad(minutes));
                setSeconds(pad(seconds));
            }
        }, 1000)
    }
    //componentDidMount
    useEffect(()=>{
        startTimer();
        return ()=>{
            clearInterval(interval.current);
        }
    })
  return (
    <Container color={status===1 ? "#facf19" : "rgba(250,207,25,.6)"}>
            <DatetimeContainer>
                <EndTime>{timePieces[0]+":"+timePieces[1]}</EndTime>
                <EndDate>{datePieces[1]+"/"+datePieces[2]}</EndDate>
            </DatetimeContainer>
            {
                status === 1 ? (
                    <Timer size="16px">
                        ENDS IN
                        <TimerBlock>{days}</TimerBlock>
                        <span style={{marginLeft:"2px"}}>Day</span> 
                        <TimerBlock>{hours}</TimerBlock>:
                        <TimerBlock>{minutes}</TimerBlock>:
                        <TimerBlock>{seconds}</TimerBlock>
                    </Timer>
                ) : (
                    <Timer size="20px"> Coming Soon</Timer>
                )
            }

    </Container>
  )
}

export default Countdown
