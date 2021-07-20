import React, {Component} from 'react'
import ReactDOM from 'react'
import "./Home.css"

class Home extends Component {
    render(){
        return (
            <div className="Home">
                <header>
                    <h1>Code Day Typing Speed Test</h1>
                </header>
                <nav>
                    <a href="/Solo">Solo</a>
                    <a href="/Multiplayer">Multiplayer</a>
                    <a href="/Profile">Profile</a>
                </nav>
                <h4 id="Intro">
                    Hello and welcome to our website. We have designed the website so that you are able to use
                    solo mode to practice your typing speed and improve it. Then when you feel you are ready,
                    you may challenge opponents in an online match or challenge your friends to a local game.
                </h4>
                <div id="Options">
                    <form method="GET" action="/Solo">
                        <button id="solo">
                            Solo
                        </button>
                    </form>
                    <form method="GET" action="/Multiplayer">
                        <button id="multi">
                            Multiplayer
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Home;
