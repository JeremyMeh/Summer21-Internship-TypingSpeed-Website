import React, { Component} from 'react'
import "./Solo.css"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import TextTest from './TestText';
import { getPara } from './services/UserService';
import Results from './Results';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

class Solo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            minutes: 1,
            seconds: 0,
            showBtn: false,
            script: 'This is where the paragraph for the test will go! ^_^',
            timePast: 0,
            results: false,
            paraArray: [],
            accuracy: 0,
            errors: 0,
            typedPara: "",
            totalErrors: 0,
            errorArray: [],
        };
        this.attempt = this.attempt.bind(this);
        this.handleCallback = this.handleCallback.bind(this);
        this.retrievePara = this.retrievePara.bind(this);
        this.paraConversion = this.paraConversion.bind(this);
    }

    componentDidMount() {
        this.retrievePara();
    }

    retrievePara() {
        getPara()
            .then(paragraph => {
                console.log(paragraph)
                this.setState({script: paragraph})
                this.paraConversion();
            });
    }

    gettingPara() {
        console.log(this.state.script);
    }

    handleCallback(childData) {
        this.setState({
            results: childData[0],
            characterCount: childData[1],
            accuracy: childData[2],
            errors: childData[3],
            totalErrors: childData[4],
            typedPara: childData[5],
            errorArray: childData[6],
        })
    }

    paraConversion(){
        var scriptArray = new Array();

        for(var i = 0; i < this.state.script.length;i++){
            scriptArray.push(this.state.script[i])
        }
        this.setState({paraArray:scriptArray});
    }

    render() {
   
        const { minutes, seconds, showBtn, script, results, characterCount, timePast } = this.state;

        return(
            <div className="Solo" oncopy="return false" oncut="return false" onpaste="return false">
                <div id="title">
                    {
                        results ? <h3>Results</h3> : 
                        <div>
                            <h3>Practice Test</h3>
                            <h5>Please hit space when you have finished typing the paragraph.</h5>
                        </div>
                    }
                </div>
                <div id="test">
                    {
                        results ? <span></span> : 
                            <div id="timer">
                                <div id="tim">
                                    { minutes === 0 && seconds === 0
                                        ? <h4>Time's Up!</h4>
                                        : <h4>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h4>
                                    }
                                </div>
                            </div>
                    }

                    <div id="api">
                        {
                            results ? 
                                <span></span>
                            :
                                <div id="border">
                                    <div id="paragraph">
                                        <p>{this.state.paraArray}</p>
                                    </div>
                                </div>
                        }
                    </div>
                    <div id="userInput">
                        {results ?
                            <Results charCountFromParent={characterCount} timePastFromParent={timePast > 60 ? timePast - 1 : timePast} totalChar={script.length} accuracy={this.state.accuracy} fixedErrors={this.state.errors} totalErrors={this.state.totalErrors} script={this.state.script} typedPara={this.state.typedPara} errorArray={this.state.errorArray}/> :
                                (showBtn ?
                                    <TextTest parentCallback={this.handleCallback} dataFromParent={script} passParaArray={this.state.paraArray} time={[minutes, seconds]} /> :
                                    <Button clickHandler={this.attempt} />
                                )
                        }
                    </div>
                </div>
            </div>
        )
    }

    attempt() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state;

            if(this.state.results === true){
                clearInterval(this.myInterval);
            }

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
            if (this.state.results === false) {
                this.setState({timePast: this.state.timePast + 1});
            }
            
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
            <button class="Buttons" onClick={this.props.clickHandler}> Start </button>
        )
    }
}

export default Solo;