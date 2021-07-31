import React, { Component } from 'react'
import "./Solo.css"

class TextTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputPara: '',
            practiceScript: this.props.dataFromParent,
        };
        this.changed = this.changed.bind(this);
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
        });
    }
 
}

export default TextTest;




//Move the stuff from Solo to this file to be able to compare them live