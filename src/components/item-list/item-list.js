import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {
    swapiService = new SwapiService();
    state = {
        peopleList: null,
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                console.log('peopleList', peopleList);
                this.setState({
                    peopleList,
                })
            });
    }
    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.OnItemSelected(id)}
                >
                    {name}
                </li>
            )
        })
    }
    render() {
        const { peopleList} = this.state;
        const items = peopleList ? this.renderItems(peopleList) : [];
        if (!peopleList) {
            return <Spinner/>;
        }
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}