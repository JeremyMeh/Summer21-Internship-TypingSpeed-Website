import React, { useEffect, useState } from 'react'
// import "./Solo.css"

function Solo() {

    return(
        <div className="Solo">
            <div id="title">
                <h3>Pactice Test</h3>
            </div>
            <div id="test">
                <div id="timer">
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                </div>

                <div id="apiParagraph">

                </div>

                <div id="userInput">

                </div>
            </div>
        </div>
    )
}

export default Solo;