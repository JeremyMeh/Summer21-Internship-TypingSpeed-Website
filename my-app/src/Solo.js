import React, { Component} from 'react'
import "./Solo.css"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import TextTest from './TestText';
import Results from './Results';

class Solo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            minutes: 1,
            seconds: 30,
            showBtn: false,
            script: 'This is where the paragraph for the test will go! ^_^',
            timePast: 0,
            results: false,
        };
        this.attempt = this.attempt.bind(this);
        this.handleCallback = this.handleCallback.bind(this);
    }

    handleCallback(childData) {
        this.setState({results: childData})
        console.log(childData);
    }

    render() {
   
        const { minutes, seconds, showBtn, script, results } = this.state;

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
                                <p>{script}</p>
                            </div>
                        </div>
                    </div>
                    <div id="userInput">
                        {/* <BrowserRouter>
                            <Switch>
                                <Route exact path="/Solo"> */}
                                    {results ? <p> Nothing to see just yet. Time past: {this.state.timePast} </p> : (showBtn ? <TextTest parentCallback={this.handleCallback} dataFromParent={script} /> : <Button clickHandler={this.attempt} />)}
                                {/* </Route>
                            </Switch>
                        </BrowserRouter> */}
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
        // this.setState({ showButton: !this.state.showButton });
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