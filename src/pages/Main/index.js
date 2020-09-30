import React, {useState} from 'react';
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
  GlobalStyle , 
  Link,
  Div
} from './styled'
import theme from "../../utility/theme"
import texts from "../../utility/texts"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faClock } from '@fortawesome/free-solid-svg-icons'
import Clock from 'react-live-clock';
import moment from "moment"

function Main() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [element, setElement] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();


  return (
    <>
      <GlobalStyle />
        <Section>
          <Container>
              <Div>
                <Link 
                  onClick={() => setElement(0)}
                >
                  <FontAwesomeIcon style={{fontSize: 40, color: element === 1 ? theme.threeColor : theme.primaryColor}} icon={faClock}  size="lg"/>
                </Link>
                <Link 
                  onClick={() => setElement(1)}
                >
                  <FontAwesomeIcon icon={faStopwatch} style={{fontSize: 39, color: element === 0 ? theme.threeColor : theme.primaryColor}} size="lg" />
                </Link>
              </Div>
                {element === 1 ? (
                  <>
                      <DivTitle>
                          <Title color={theme.threeColor}>{texts.titleTime}</Title>
                      </DivTitle>
                      <DivTime>
                        <Display time={time}/>
                        <Button status={status} resume={resume} reset={reset} stop={stop} start={start}/>
                    </DivTime>
                  </>
                ) : (
                  <>
                    <DivTitle>
                        <Title color={theme.threeColor}>Relógio - React</Title>
                    </DivTitle>
                    <DivTitle>
                        <Title>
                          Horário Local:
                          <br /> 
                         <Clock
                            format={'HH:mm:ss'}
                            ticking={true} 
                          />
                          <br /> 
                         <Clock
                            format={'D'}
                            ticking={true} 
                          />
                          de
                          <Clock
                            format={'HH:mm:ss'}
                            onChange={date => console.log(moment().format('MMMM'))}
                            ticking={true} 
                          />
                        </Title>
                        <Title>
                          Asia/Tokyo:
                          <br /> 
                         <Clock
                            format={'HH:mm:ss'}
                            ticking={true}
                            timezone={'Asia/Tokyo'} 
                          />
                          <br /> 
                         <Clock
                            format={'D'}
                            ticking={true}
                            timezone={'Asia/Tokyo'}  
                          />
                          de
                          <Clock
                            format={'MMMM'}
                            ticking={true}
                            timezone={'Asia/Tokyo'}  
                          />
                        </Title>
                        <Title>
                          America/Nova Iorque:
                          <br /> 
                         <Clock
                            format={'HH:mm:ss'}
                            ticking={true}
                            timezone={'America/New_York'} 
                          />
                          <br /> 
                         <Clock
                            format={'D'}
                            ticking={true}
                            timezone={'America/New_York'}  
                          />
                          de
                          <Clock
                            format={'MMMM'}
                            ticking={true} 
                            timezone={'America/New_York'} 
                          />
                        </Title>
                    </DivTitle>
                </>
                )}
          </Container>
        </Section>
      </>
  );
}

export default Main;
