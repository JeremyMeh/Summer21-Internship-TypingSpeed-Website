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
        };
        this.changed = this.changed.bind(this);
        this.secondCheck = this.secondCheck.bind(this);
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
        // console.log(this.state.counter);
        if(this.state.counter+1 === this.state.scriptLen-1){
            this.setState({
                showResults: true,
            });
            // console.log(this.state.showResults);
        }
    }

    secondCheck(){
        if(this.state.showResults === true){
            this.onTrigger();
        }
    }

    onTrigger() {
        var showRes = this.state.showResults;
        this.props.parentCallback(showRes);
    }
 
}

export default TextTest;




