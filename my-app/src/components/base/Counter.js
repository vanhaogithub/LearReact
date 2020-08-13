import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: 180,
            counter: 0
        };
    }
    incrementCounter() {
        this.setState(
            {
                counter: this.state.counter + 1,
                age: this.state.age + 1
            }
        )
    }
    componentDidMount() {
        this.setState(
            {
                age: this.state.age + 1
            }
        )
        this.timerID = setInterval(
            () => this.incrementCounter(), 2000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    
    render() {
        return (
            <div>
                <h2>Counter: {this.state.counter}</h2>
                <h2>Age: {this.state.age}</h2>
            </div>
        );
    }
}

export default Counter;