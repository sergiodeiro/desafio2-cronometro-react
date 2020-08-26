import React from 'react';
import {Div, Span} from '../styled'

const Display = props => {
  const h = () => {
     if(props.time.h === 0){
       return '';
     } else {
       return <Span>{(props.time.h >= 10)? props.time.h : "0"+ props.time.h}</Span>;
     }
  }
  return (
    <Div>
       {h()}&nbsp;&nbsp;
       <Span>{(props.time.m >= 10)? props.time.m : "0"+ props.time.m}</Span>&nbsp;:&nbsp;
       <Span>{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</Span>&nbsp;:&nbsp;
       <Span>{(props.time.ms >= 10)? props.time.ms : "0"+ props.time.ms}</Span>
    </Div>
  );
}

export default Display;