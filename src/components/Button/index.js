import React from 'react';
import {Div, Buttons} from '../styled'
import theme from "../../utility/theme"
import texts from "../../utility/texts"

const Button = (props) => {
  return (
    <Div>
      {(props.status === 0)? 
          <Buttons 
            borderColor={theme.fourthColor}
            backColor={theme.threeColor}
            hoverColor={theme.threeColor}
            hoverBack={theme.fourthColor}
            onClick={props.start}>
              {texts.start}
          </Buttons> 
        : null
      }

      {(props.status === 1)? 
          <Div>
            <Buttons 
              borderColor={theme.primaryColor}
              backColor={theme.threeColor}
              hoverColor={theme.threeColor}
              hoverBack={theme.primaryColor}
              onClick={props.stop}> 
                {texts.stop}
            </Buttons>
            <Buttons 
              borderColor={theme.secondColor}
              backColor={theme.threeColor}
              hoverColor={theme.threeColor}
              hoverBack={theme.secondColor}
              onClick={props.reset}>
                {texts.reset}
             </Buttons>
          </Div> 
        : null
      }

     {(props.status === 2)? 
          <Div>
            <Buttons 
              borderColor={theme.fiveColor}
              backColor={theme.threeColor}
              hoverColor={theme.threeColor}
              hoverBack={theme.fiveColor}
                onClick={props.resume}>
                  {texts.resume}
            </Buttons>
            <Buttons 
              borderColor={theme.secondColor}
              backColor={theme.threeColor}
              hoverColor={theme.threeColor}
              hoverBack={theme.secondColor}
              onClick={props.reset}>
                {texts.reset}
            </Buttons>
          </Div> 
        : null
      }
     
    </Div>
  );
}

export default Button;