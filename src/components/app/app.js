import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        selectedPerson: 2,
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        })
    };

    render () {
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

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected = {this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }

};