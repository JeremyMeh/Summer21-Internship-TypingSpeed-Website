import React from 'react'
import "./Home.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Solo from './Solo';
import Nav from './Nav'

function Home() {
    
        return (
            <div className="Home">
                <Header />
                <BrowserRouter>
                    <Switch>
                        <Route path = "/Solo">
                            <Nav />
                            <Solo />
                        </Route>
                        <Route path = "/">
                            <Nav />
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
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    
}

export default Home;
