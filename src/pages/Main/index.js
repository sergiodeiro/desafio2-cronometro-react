import React, { useState } from 'react';
import {
  Button,
  Display
} from "../../components"
import {
  Section,
  Container,
  DivTitle,
  Title,
  DivTime,
  GlobalStyle,
  Link,
  Div,
  Span
} from './styled'
import theme from "../../utility/theme"
import texts from "../../utility/texts"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faClock, faHourglassHalf, faBell } from '@fortawesome/free-solid-svg-icons'
import Countdown from 'react-countdown';
import TimeZone from "../../components/TimeZone";
import styles from '../../css/bootstrap.css';



function Main() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [element, setElement] = useState(0);
  const [parcial, setParcial] = useState({});

  const Completionist = () =>
    <Div className="row despertador" color={theme.threeColor}>
      <Div className="col-md-12">
        <FontAwesomeIcon icon={faBell} style={{ fontSize: 70 }} size="lg" />
      </Div>
      <Div className="col-md-12">
        <h1>{texts.temporFinality}</h1>
      </Div>
    </Div>;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <Div>
          <h1>{hours >= 10 ? hours : "0" + hours}:{minutes >= 10 ? minutes : "0" + minutes}:{seconds >= 10 ? seconds : "0" + seconds}</h1>
        </Div>
      );
    }
  };

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
    setParcial(time);
    console.log([time])
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
  };

  const resume = () => start();


  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet"></link>
      <GlobalStyle />
      <Section>
        <Container>
          <Div className="row">
            <Div className="col-md-4 text-center">
              <Link onClick={() => setElement(0)}>
                <FontAwesomeIcon style={{ fontSize: 40, color: element === 0 ? theme.threeColor : theme.sevenColor }} icon={faClock} size="lg" />
              </Link>
            </Div>
            <Div className="col-md-4 text-center">
              <Link onClick={() => setElement(1)} >
                <FontAwesomeIcon icon={faStopwatch} style={{ fontSize: 39, color: element === 1 ? theme.threeColor : theme.sevenColor }} size="lg" />
              </Link>
            </Div>
            <Div className="col-md-4 text-center">
              <Link onClick={() => setElement(2)} >
                <FontAwesomeIcon icon={faHourglassHalf} spin={element === 2 ? true : false} style={{ fontSize: 39, color: element === 2 ? theme.threeColor : theme.sevenColor }} size="lg" />
              </Link>
            </Div>
          </Div>
          {element === 1 ? (
            <>
              <DivTitle>
                <Title color={theme.threeColor}>{texts.titleTime}</Title>
              </DivTitle>
              <DivTime>
                <Display time={time} />
                <Button status={status} resume={resume} reset={reset} stop={stop} start={start} />
                {status === 2 ? (
                  <Div className="row">
                    <Div className="col-md-12">
                      <Title marginTop="20px">{texts.parcial}</Title>
                    </Div>
                    <Div className="col-md-12 parcial">
                      <h1>
                        {time.h > 0 ? (<> {time.h} : </>) : null}
                        {time.m >= 10 ? time.m : "0" + time.m}:
                              {time.s >= 10 ? time.s : "0" + time.s}:
                              {time.ms >= 10 ? time.ms : "0" + time.ms}
                      </h1>
                    </Div>
                  </Div>
                ) : (
                    <>
                      {parcial && parcial.m !== undefined ? (
                        <>
                          <Title marginTop="20px">{texts.parcial}</Title>
                          {parcial.h > 0 ? (<> {parcial.h} : </>) : null}
                          {parcial.m >= 10 ? parcial.m : "0" + parcial.m}:
                              {parcial.s >= 10 ? parcial.s : "0" + parcial.s}:
                              {parcial.ms >= 10 ? parcial.ms : "0" + parcial.ms}
                        </>
                      ) : (
                          null
                        )}
                    </>
                  )}
              </DivTime>
            </>
          ) : (
              <>
                {element === 2 ? (
                  <>
                    <DivTitle>
                      <Title color={theme.threeColor}>{texts.tempor}</Title>
                    </DivTitle>
                    <DivTime>
                      <Countdown date={Date.now() + 5000} renderer={renderer} />
                    </DivTime>
                  </>
                ) : (
                    <>
                      <DivTitle>
                        <Title color={theme.threeColor}>{texts.clock}</Title>
                      </DivTitle>
                      <TimeZone />
                    </>
                  )
                }
              </>
            )}
        </Container>
      </Section>
    </>
  );
}

export default Main;
