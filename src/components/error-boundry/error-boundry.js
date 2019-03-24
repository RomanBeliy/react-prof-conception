import React, {Component} from 'react';
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends Component {
    state = {
        hasError: false,
    };

    componentDidCatch() {
        this.setState({
            hasError: true,
        })
    }
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }
        console.log('children===>>', this.props.children)
        return this.props.children;
    }
}