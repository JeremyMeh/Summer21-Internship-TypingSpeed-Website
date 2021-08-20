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
            errors: this.props.errors,
            totalCharacters: this.props.totalChar,
        };
        this.reload = this.reload.bind(this);
    }

    componentDidMount() {
        console.log("timeTaken: ", this.state.timePast);
        console.log("errors: ", this.state.errors);
        console.log("charCount: ", this.state.charCount);
        var score = Math.floor(((this.state.charCount / 5) - this.state.errors) / (this.state.timePast / 60));
        this.setState({score:score});
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
                    Accuracy: {this.state.accuracy} %
                </p>
                <button class="Buttons" onClick={this.reload}>Restart</button>
            </div>
                
        )
    }



}

export default Results;