import React from 'react';
import {Div, Buttons} from '../styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faSyncAlt, faStop } from '@fortawesome/free-solid-svg-icons'

const Button = (props) => {
  return (
    <Div>
      {(props.status === 0)? 
          <Buttons className="btn btn-primary btn-redondo" 
            onClick={props.start}>
              <FontAwesomeIcon icon={faPlayCircle} style={{ fontSize: 40}} size="lg" />
          </Buttons> 
        : null
      }

      {(props.status === 1)? 
          <Div>
            <Buttons className="btn btn-primary btn-redondo"
              onClick={props.stop}> 
               <FontAwesomeIcon icon={faSyncAlt} style={{ fontSize: 40}} size="lg" />
            </Buttons>
            <Buttons className="btn btn-primary btn-redondo"
              onClick={props.reset}>
                <FontAwesomeIcon icon={faStop} style={{ fontSize: 40}} size="lg" />
             </Buttons>
          </Div> 
        : null
      }

     {(props.status === 2)? 
          <Div>
            <Buttons className="btn btn-primary btn-redondo"
                onClick={props.resume}>
                  <FontAwesomeIcon icon={faPlayCircle} style={{ fontSize: 40}} size="lg" />
            </Buttons>
            <Buttons className="btn btn-primary btn-redondo"
              onClick={props.reset}>
                <FontAwesomeIcon icon={faStop} style={{ fontSize: 40}} size="lg" />
            </Buttons>
          </Div> 
        : null
      }
     
    </Div>
  );
}

export default Button;