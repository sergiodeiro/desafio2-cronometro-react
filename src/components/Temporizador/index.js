import React, { Component } from "react"
import { Buttons } from '../styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPause, faStop, faStar } from '@fortawesome/free-solid-svg-icons'
import { Div, Relogio, PonteiroConometro } from '../styled'

class Temporizador extends Component {
    constructor() {
        super();

        this.state = {
            countdown: false,
            timerLigado: false,
            timerInicio: 0,
            time: 0,

            segundos: "00",
            minutos: "00",
            horas: "00",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        const timerSegundos = this.state.segundos * 1000
        const timerMinutos = this.state.minutos * 60000
        const timerHoras = this.state.horas * 3600000

        this.setState({
            countdown: true,
            timerInicio: timerSegundos + timerMinutos + timerHoras
        })

        this.iniciarTimer()
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
    }

    iniciarTimer = () => {
        this.setState({
            timerLigado: true
        })

        this.temporizador = setInterval(() => {
            const timerInicio = this.state.timerInicio

            if (timerInicio > 0) {
                this.setState({
                    timerInicio: this.state.timerInicio - 1000
                })
            }
            if (timerInicio === 0) {
                clearInterval(this.temporizador)
                this.setState({
                    countdown: false,
                    timerInicio: 0,
                    timerLigado: false
                })
                alert("Tempo Finalizado !!!")
            }
        }, 1000)

    }

    pararTimer = () => {
        this.setState({ timerLigado: false })
        clearInterval(this.temporizador)
    }

    resetTimer = () => {
        this.setState({
            timerInicio: 0,
            horas: 0,
            minutos: 0,
            segundos: 0,
            timerLigado: false,
            countdown: false
        })
    }

    maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    getCountdown = () => {
        let countdown = []

        const tempoTotal = this.state.timerInicio

        let segundos = ("0" + (Math.floor(tempoTotal / 1000) % 60)).slice(-2)
        let minutos = ("0" + (Math.floor(tempoTotal / 60000) % 60)).slice(-2)
        let horas = ("0" + Math.floor(tempoTotal / 3600000)).slice(-2)

        if (this.state.countdown) {
            countdown.push(
                    <Div key="name" className="row">
                        <Div style={PonteiroConometro} className={`${this.state.timerLigado === true ? 'animacao-cronometro animacao-cronometro-active' : 'animacao-cronometro'} ponteiro-resposivo`}></Div>
                            <Div style={Relogio}>
                            <h1 style={{fontWeight: 'BOLD'}}>
                                <span>{horas}:</span>
                                <span>{minutos}:</span>
                                <span>{segundos}</span>
                            </h1>
                            </Div>
                    </Div>
            )
        }
        return countdown
    }

    getCountdownInput = () => {
        let countdownInput = []

        if (!this.state.countdown) {
            countdownInput.push(
                <div key="push">
                    <input className="input-timer"
                        maxLength="2"
                        onInput={this.maxLengthCheck}
                        type="number"
                        name="horas"
                        placeholder="00"
                        onChange={this.handleChange}
                    />

                    :

                    <input className="input-timer"
                        maxLength="2"
                        onInput={this.maxLengthCheck}
                        type="number"
                        name="minutos"
                        placeholder="00"
                        onChange={this.handleChange}
                    />

                    :

                    <input className="input-timer"
                        maxLength="2"
                        onInput={this.maxLengthCheck}
                        type="number"
                        name="segundos"
                        placeholder="00"
                        onChange={this.handleChange}
                    />
                </div>
            )
        }

        return countdownInput
    }

    render() {
        return (
            <div className="Cronometro">
                {this.getCountdownInput()}

                {this.getCountdown()}

                {this.state.timerLigado === false && this.state.timerInicio === 0 && (
                    <Buttons className="btn btn-primary btn-redondo"
                        onClick={this.handleSubmit}>
                        <FontAwesomeIcon icon={faPlayCircle} style={{ fontSize: 40 }} size="lg" />
                    </Buttons>
                )}

                {this.state.timerLigado === true && (
                    <Buttons className="btn btn-primary btn-redondo"
                        onClick={this.pararTimer}>
                        <FontAwesomeIcon icon={faPause} style={{ fontSize: 40 }} size="lg" />
                    </Buttons>
                )}

                {this.state.timerLigado === true && (
                    <Buttons className="btn btn-primary btn-redondo"
                        onClick={this.resetTimer}>
                        <FontAwesomeIcon icon={faStop} style={{ fontSize: 40 }} size="lg" />
                    </Buttons>
                )}

                {this.state.timerLigado === false && this.state.timerInicio > 0 && (
                    <Buttons className="btn btn-primary btn-redondo"
                        onClick={this.iniciarTimer}>
                        <FontAwesomeIcon icon={faPlayCircle} style={{ fontSize: 40 }} size="lg" />
                    </Buttons>
                )}
            </div>
        )
    }
}

export default Temporizador