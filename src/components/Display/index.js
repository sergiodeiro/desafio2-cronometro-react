import React from 'react';
import { Div, Span, Relogio, PonteiroConometro } from '../styled'

const Display = props => {
  const h = () => {
    if (props.time.h === 0) {
      return '';
    } else {
      return (
        <>
          <Span>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</Span>&nbsp;:&nbsp;
        </>
      )
        ;
    }
  }

  return (
    <Div className="row">
      <Div style={PonteiroConometro} className={`${props.time.ms>0 ? 'animacao-cronometro animacao-cronometro-active' : 'animacao-cronometro'} ponteiro-resposivo`}></Div>
      <Div style={Relogio}>
        <h1><strong>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}:{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}:{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</strong></h1>
      </Div>
      {h()}
    </Div>
  );
}

export default Display;