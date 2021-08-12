import React, { Component } from "react";
import './Solo.css';

class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            charCount: this.props.charCountFromParent,
            timePast: this.props.timePastFromParent,
            score: 0.0,
        };
    }

    componentDidMount() {
        var score = (this.state.charCount / 5) / (this.state.timePast / 60);
        this.setState({score:score});
    }

    render() {

        return(
            <p>Character Count: {this.state.charCount} Time past: {this.state.timePast} WPM: {this.state.score}</p>
        )
    }



}

export default Results;