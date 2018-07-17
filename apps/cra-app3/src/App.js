import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Add, Subtract} from 'comp1';
import Comp2 from 'comp2';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">CRA-App3</h1>
                </header>
                <Add a={1} b={1}/>
                <hr />
                <Subtract a={1} b={1}/>
                <hr />
                <Comp2 a={1} b={1}/>
            </div>
        );
    }
}

export default App;
