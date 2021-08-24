import React, { Component } from 'react'
import "./Solo.css"

class TextTest extends Component {

    constructor(props) {
        super(props);
        var script = this.props.dataFromParent;
        this.state = {
            inputPara: "",
            practiceScript: script,
            counter: 0,
            scriptLen: script.length,
            showResults: false,
            errorCounter: 0,
            paraArray: this.props.passParaArray,
            minutes: this.props.time[0],
            seconds: this.props.time[1],
            finalErrorCount: 0,
            accuracy: 0,
            errorArray: [ [ "" , "" ] ],
        };
        this.changed = this.changed.bind(this);
        this.firstcheck = this.firstcheck.bind(this);
        this.secondCheck = this.secondCheck.bind(this);
        this.paragraphCheck = this.paragraphCheck.bind(this);
        this.userErrorsCheck = this.userErrorsCheck.bind(this);
    }


    render(){
        return(
                <div id="typingArea">
                    <textarea name='inputPara' rows="10" cols="89" onChange={this.changed} ></textarea>
                </div>
        )
    }


    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state;

            if (seconds > 0) {
              this.setState(({ seconds }) => ({
                seconds: seconds - 1
              }))
              console.log("poofing up");
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    this.setState({showResults : true})
                    this.userErrorsCheck();
                    this.onTrigger();
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                    minutes: minutes - 1,
                    seconds: 59
                    }))
                }
            }
            if (this.state.showResults === true) {
                clearInterval(this.myInterval)
            }
        }, 1000);
    }

    changed(event) {
        this.setState({
            [event.target.name]: event.target.value,
            counter: event.target.value.length,
        });
        this.secondCheck();
        // console.log(this.state.counter);
        this.firstcheck();
        this.paragraphCheck();
    }

    firstcheck(){
        if(this.state.counter+1 === this.state.scriptLen){
            this.setState({
                showResults: true,
            });
            console.log(this.state.showResults);
        }
    }

    secondCheck(){
        this.firstcheck();
        if(this.state.showResults === true){
            this.userErrorsCheck();
            this.onTrigger();
        }
    }

    userErrorsCheck(){
        var holderArray = new Array();

        for(var i = 0; i < this.state.inputPara.length; i++){
            if(this.state.inputPara[i] !== this.state.paraArray[i]){
                this.setState({
                    finalErrorCount : this.state.finalErrorCount + 1,
                });
                holderArray.push([this.state.inputPara[i], i.toString()])
            }
        }
        this.setState({
            errorArray: holderArray,
        })
        console.log("ErrorArray: ", this.state.errorArray);
        if(this.state.inputPara.length > 0){
            this.state.accuracy = parseFloat(((this.state.inputPara.length - this.state.errorCounter)/this.state.inputPara.length) * 100).toFixed(2);
        } else {
            this.state.accuracy = 0;
        }

        console.log(this.state.accuracy);
    }

    onTrigger() {
        var showRes = this.state.showResults;
        var count = this.state.counter;
        var accuracy = this.state.accuracy;
        console.log(accuracy);
        var actualErrors = this.state.finalErrorCount;
        var totalErrors = this.state.errorCounter;
        var typedPara = this.state.inputPara;
        var errorArray = this.state.errorArray;
        this.props.parentCallback([showRes, count, accuracy, actualErrors, totalErrors, typedPara, errorArray]);
    }
 
    paragraphCheck() {
        console.log(this.state.paraArray[this.state.counter - 1]);
        console.log(this.state.inputPara[this.state.counter - 1]);

        if(this.state.inputPara[this.state.counter - 1] !== this.state.paraArray[this.state.counter - 1]){

            this.setState({errorCounter : this.state.errorCounter + 1});
            console.log("error found")
            //change the color to RED

        }
        else{

            console.log("no error");

            //change the color to YELLOW

        }
    }
    

}

export default TextTest;




