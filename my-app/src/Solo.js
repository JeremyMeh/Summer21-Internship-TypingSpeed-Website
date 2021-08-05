import React, { Component, useState } from 'react'
import "./Solo.css"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import TextTest from './TestText';
import { getPara } from './services/UserService';


class Solo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            minutes: 2,
            seconds: 30,
            showBtn: false,
            script: "",
            timePast: 0,
        };
        this.attempt = this.attempt.bind(this);
        this.retrievePara = this.retrievePara.bind(this);
    }

    componentDidMount() {
        this.retrievePara();
    }

    retrievePara() {
        getPara()
            .then(paragraph => {
                console.log(paragraph)
                this.setState({script: paragraph})
            });
    }

    gettingPara() {
        console.log(this.state.script);
    }

    

    render() {
   
        const { minutes, seconds, showBtn, script } = this.state;

        return(
            <div className="Solo">
                <div id="title">
                    <h3>Practice Test</h3>
                </div>
                <div id="test">
                    <div id="timer">
                        <div id="tim">
                            { minutes === 0 && seconds === 0
                                ? <h4>Time's Up!</h4>
                                : <h4>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h4>
                            }
                        </div>
                    </div>

                    <div id="api">
                        <div id="border">
                            <div id="paragraph">
                                <p>{this.state.script}</p>
                                <p>{this.state.extraPracPara}</p>
                            </div>
                        </div>
                    </div>
                    <div id="userInput">
                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/Solo">
                                    {showBtn ? <TextTest dataFromParent={this.state.script} /> : <Button clickHandler={this.attempt} />}
                                </Route>
                            </Switch>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        )
    }

    attempt() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
            if (seconds > 0) {
              this.setState(({ seconds }) => ({
                seconds: seconds - 1
              }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                    minutes: minutes - 1,
                    seconds: 59
                    }))
                }
            }
            this.setState({timePast: this.state.timePast + 1});
        }, 1000);
        this.setState({ showButton: !this.state.showButton });
        this.setState({showBtn: true});
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
}

class Button extends Component{
    render() {
        return (
            <button id="startLink" onClick={this.props.clickHandler}> Start </button>
        )
    }
}

export default Solo;