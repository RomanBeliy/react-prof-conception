import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
    swapiService = new SwapiService();
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
                <div className="col-md-6 mb2">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPlanets}
                        renderItem={(item) =>
                            (<span>{item.name}</span>)}
                    />
                </div>
                <div className="col-md-6 mb2">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllStarships}
                        renderItem={(item) => item.name}
                    />
                </div>
            </div>
        );
    }

};