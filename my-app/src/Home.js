import React, {useState} from 'react'
import "./Home.css"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
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
                            <Link to="/Solo">
                                <button id="solo">
                                    Solo
                                </button>
                            </Link>
                            {/* <p/> */}
                            {/* <Link to="/Multiplayer">
                                <button id="multi">
                                    Multiplayer
                                </button>
                            </Link> */}
                        </div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
    
}

export default Home;
