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
            correctCounter: 0,
            paraArray: this.props.passParaArray,
        };
        this.changed = this.changed.bind(this);
        this.secondCheck = this.secondCheck.bind(this);
        this.paragraphCheck =  this.paragraphCheck.bind(this);
    }
    


    render(){
        return(
                <div id="typingArea">
                    <textarea name='inputPara' rows="10" cols="89" onChange={this.changed}></textarea>
                    <p>{this.state.inputPara}</p>
                </div>
        )
    }

    changed(event) {
        this.setState({
            [event.target.name]: event.target.value,
            counter: event.target.value.length,
        });
        this.secondCheck();

        
        this.paragraphCheck();
    }










    secondCheck(){

    
    
    
    }

    onTrigger() {

    
    
    }
    
    paragraphCheck(){
        // console.log(this.state.inputPara[this.state.counter - 1]);
        // console.log(this.state.paraArray[this.state.counter - 1]);

        if(this.state.inputPara[this.state.counter - 1] != this.state.paraArray[this.state.counter - 1]){

            this.setState({errorCounter : this.state.errorCounter + 1});
            console.log("error found")
            //change the color to be RED
        }
        else{
            console.log("no error")

            //change the color to be YELLOW
        }
    }
}

export default TextTest;




