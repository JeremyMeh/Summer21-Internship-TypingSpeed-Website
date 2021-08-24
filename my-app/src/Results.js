import React, { Component } from "react";
import './Solo.css';

class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            charCount: this.props.charCountFromParent,
            timePast: this.props.timePastFromParent,
            score: 0,
            accuracy: this.props.accuracy,
            fixedErrors: this.props.fixedErrors,
            totalCharacters: this.props.totalChar,
            totalErrors: this.props.totalErrors,
            script: this.props.script,
            typedPara: this.props.typedPara,
            typedParaArray: [],
            errorArray: this.props.errorArray,
            finalParaArray: [],
        };
        this.style = {
            backgroundColor: 'red'
        }
        this.reload = this.reload.bind(this);
        this.printTypedPara = this.printTypedPara.bind(this);
    }

    componentDidMount() {
        console.log("timeTaken: ", this.state.timePast);
        console.log("errors: ", this.state.fixedErrors);
        console.log("charCount: ", this.state.charCount);
        var score = Math.floor(((this.state.charCount / 5) - this.state.fixedErrors) / (this.state.timePast / 60));
        this.setState({score:score});
        var typedParaArray = [];

        for(var i = 0; i < this.state.typedPara.length;i++){
            typedParaArray.push(this.state.typedPara[i])
        }
        this.setState({typedParaArray:typedParaArray});
    }

    reload() {
        window.location.reload();
     }

    render() {

        return(
            <div>
                <p>
                    Total Characters: {this.state.totalCharacters}<br />
                    Characters Typed: {this.state.charCount}<br />
                    Time Taken: {this.state.timePast}<br />
                    Speed: {this.state.score} wpm<br />
                    Total Errors Made: {this.state.totalErrors}<br />
                    Non-Corrected Errors: {this.state.fixedErrors}<br />
                    Accuracy: {this.state.accuracy} %
                </p>
                <p id='resultsPara'>
                    Given Paragraph: <br />
                    {this.state.script} <br /><br />
                    Typed Paragraph: <br />
                    {this.printTypedPara()}
                </p>
                <button class="Buttons" onClick={this.reload}>Restart</button>
            </div>
                
        )
    }


    // This function is to highlight the errors when the paragraph is displayed on the results page and is not working.
    // printTypedPara() {
    //     var x = 0;
    //     console.log(this.state.typedParaArray)
    //     for(var i = 0; i < this.state.typedParaArray.length; i++){
    //         if(this.state.errorArray[x][1] === i){
    //             x += 1;
    //             this.state.finalParaArray.push(
    //                 < style={this.style}>{this.state.typedPara[i]}</p>
    //             )
    //         } else {
    //             this.state.finalParaArray.push(
    //                 <p>{this.state.typedPara[i]}</p>
    //             )
    //         }
    //     }
    //     console.log(this.state.finalParaArray);
    //     return(this.state.finalParaArray);
    // }



}

export default Results;