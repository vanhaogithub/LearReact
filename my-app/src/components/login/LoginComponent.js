import React from 'react';
import '../../css/login.css'
class Login extends React.Component {
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
    mySubmitHandler = (event) => {
        event.preventDefault();
        let age = this.state.age;
        if (!Number(age)) {
            alert("Your age must be a password");
        }
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <div className='loginForm'>
                <h2>Counter: {this.state.counter}</h2>
                <h2>Age: {this.state.age}</h2>
                <div className='loginContent'>
                    <form onSubmit={this.mySubmitHandler}>
                        <h1>{this.props.formName}</h1>
                        <p>UserName:</p>
                        <input
                            type='text'
                            name='username'
                            onChange={this.myChangeHandler}
                        />
                        <p>Password:</p>
                        <input
                            type='text'
                            name='age'
                            onChange={this.myChangeHandler}
                        />
                        <br />
                        <br />
                        <input type='submit' value='Login' />
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;