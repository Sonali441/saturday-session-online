import React, { Component } from 'react'
import Clock from './Clock';
import DisplayCountValue from './DisplayCountValue';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log("After Mount");
    }

    componentWillUpdate() {
        console.log("Will Update")
    }

    shouldComponentUpdate() {
        console.log("should Update")
        return true;
    }

    componentDidUpdate() {
        console.log("Inside component did Update");
    }


    incrementCounter = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrementCounter = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div>
                <h1>Counter Component</h1>
                <h4>{this.state.count}</h4>
                <button onClick={this.incrementCounter}>Increment</button>
                <button onClick={this.decrementCounter}>Decrement</button>
                <DisplayCountValue countValue={this.state.count} />
                <Clock />
            </div>
        );
    }
}
