import React from 'react'
import Clock from 'react-live-clock';
import {
    Div,
    Relogio,
    Ponteiro
} from '../styled'
import moment from "moment"
//Bootstrap

const TimeZone = () => {

    console.log(moment.locale('pt-br'));

    return (
        <Div className={"container"}>
            <Div style={Ponteiro} className="animacao-relogio ponteiro-resposivo"></Div>
            <Div style={Relogio}>
                Horário Local:
            <br />
                <h1><Clock format={'HH:mm:ss'} ticking={true} /></h1>
                <Div>
                    <Clock format={'D'} ticking={true} /> de <Clock format={'MMMM'} ticking={true} />
                </Div>
            </Div>
            <Div className={"row parcial"}>
                <Div className={"col-md-6 m-p-10"}>
                    <h4><strong>Tokio - Japão:</strong></h4>
                </Div>
                <Div className={"col-md-6 m-p-10 text-right"}>
                    <h4>
                        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Tokyo'} />
                    </h4>
                </Div>
            </Div>
            <Div className={"row parcial"}>
                <Div className={"col-md-6 m-p-10"}>
                    <h4><strong>Londres - Inglaterra:</strong></h4>
                </Div>
                <Div className={"col-md-6 m-p-10 text-right"}>
                    <h4>
                        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/London'} />
                    </h4>
                </Div>
            </Div>
            <Div className={"row parcial"}>
                <Div className={"col-md-6 m-p-10"}>
                    <h4><strong>Nova York - EUA:</strong></h4>
                </Div>
                <Div className={"col-md-6 m-p-10 text-right"}>
                    <h4>
                        <Clock format={'HH:mm:ss'} ticking={true} timezone={'America/New_York'} />
                    </h4>
                </Div>
            </Div>
            <Div className="footer">
                
            </Div>
        </Div>
    )

}

export default TimeZone;

