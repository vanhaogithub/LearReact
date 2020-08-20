import React from 'react';
import '../../css/login.css'
import Counter from '../base/Counter';
import Button from '../base/Button';
import Array from '../base/Array';
import Inheritance from '../base/Inheritance';
import Content from '../main';
import Router from '../base/Router';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            choise: '',
            ex1: false,
            ex2: false,
            ex3: false,
            ex4: false,
            ex5: false,
            ex6: false
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        let age = this.state.age;
        if (!Number(age)) {
            alert("Your age must be a password");
        }
    }
    myChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }
    handlePressEnter = (event) => {
        if (event.key === 'Enter') {
            this.handlerChoise();
        }
    }
    handlerChoise = () => {
        switch (this.state.choise) {
            case '1':
                this.setState({
                    ex1: true,
                    ex2: false,
                    ex3: false,
                    ex4: false,
                    ex5: false,
                    ex6: false
                });
                break;
            case '2':
                this.setState({
                    ex1: false,
                    ex2: true,
                    ex3: false,
                    ex4: false,
                    ex5: false,
                    ex6: false
                });
                break;
            case '3':
                this.setState({
                    ex1: false,
                    ex2: false,
                    ex3: true,
                    ex4: false,
                    ex5: false,
                    ex6: false
                });
                break;
            case '4':
                this.setState({
                    ex1: false,
                    ex2: false,
                    ex3: false,
                    ex4: true,
                    ex5: false,
                    ex6: false
                });
                break;
            case '5':
                this.setState({
                    ex1: false,
                    ex2: false,
                    ex3: false,
                    ex4: false,
                    ex5: true,
                    ex6: false
                });
                break;
            case '6':
                this.setState({
                    ex1: false,
                    ex2: false,
                    ex3: false,
                    ex4: false,
                    ex5: false,
                    ex6: true
                });
                break;
            default:
                this.setState({
                    ex1: false,
                    ex2: false,
                    ex3: false,
                    ex4: false,
                    ex5: false,
                    ex6: false
                });
        }

    }
    render() {
        return (
            <div className='loginForm'>
                <div className='loginContent'>
                    {this.state.ex1 && <form onSubmit={this.mySubmitHandler}>
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
                    </form>}
                    {this.state.ex2 && <Counter />}
                    {this.state.ex3 && <Button name="Buton" />}
                    {this.state.ex4 && <Router />}
                    {this.state.ex5 && <Inheritance btn1={<Button name="Buton 01" />} btn2={<Button name="Buton 02" />}><p>Children infor</p></Inheritance>}
                    {this.state.ex6 && <Content />}
                    <div>
                        <input
                            type='text'
                            name='choise'
                            onChange={this.myChangeHandler}
                            onKeyDown={this.handlePressEnter}
                        />
                        <input type='button' value='Next' onClick={this.handlerChoise} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;