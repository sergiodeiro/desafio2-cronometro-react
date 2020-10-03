import React from 'react'
import Clock from 'react-live-clock';
import {
    DivTitle,
    Title,
  } from '../styled'
  import theme from "../../utility/theme"
  import moment from "moment"


const TimeZone = () => {

    console.log(moment.locale('pt-br'));

    return(
        <DivTitle>
            <Title border>
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
                format={'MMMM'}
                ticking={true} 
            />
            </Title>
            <Title color={theme.secondColor}>
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
            <Title borderTop>
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
    )

}

export default TimeZone;

