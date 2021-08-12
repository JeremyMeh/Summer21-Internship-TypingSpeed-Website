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
        this.firstcheck = this.firstcheck.bind(this);
        this.secondCheck = this.secondCheck.bind(this);
    }



    render(){
        return(
                <div id="typingArea">
                    <textarea name='inputPara' rows="10" cols="89" onChange={this.changed}></textarea>
                    <p>{this.state.scriptLen}</p>
                </div>
        )
    }  

    changed(event) {
        this.setState({
            [event.target.name]: event.target.value,
            counter: event.target.value.length,
        });
        this.secondCheck();
        console.log(this.state.counter);
        this.firstcheck();
        
    }

    firstcheck(){
        if(this.state.counter+1 === this.state.scriptLen-1){
            this.setState({
                showResults: true,
            });
            console.log(this.state.showResults);
        }
    }

    secondCheck(){
        this.firstcheck();
        if(this.state.showResults === true){
            this.onTrigger();
        }
    }

    onTrigger() {
        var showRes = this.state.showResults;
        var count = this.state.counter;
        this.props.parentCallback([showRes, count]);
    }
 















    
}

export default TextTest;




