import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        hasError: false,
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    };

    render () {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        const planet = this.state.showRandomPlanet ? <RandomPlanet />: null;
        return (
            <div>
                <Header />
                {planet}
                <button className="toogle-planet btn btn-warning btn-lg"
                        //onClick={() => {}}
                >
                    Toogle Random Planet
                </button>
                <PeoplePage/>
            </div>
        );
    }

};