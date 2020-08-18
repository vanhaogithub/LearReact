import React from 'react';
import '../../css/button.css'

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOn: true,
            buttonName: ''
        }
    }
    // gan gia tri cho state tu props
    static getDerivedStateFromProps(props, state){
        return {buttonName: props.name}
    }
    handleClick =() => {
        this.setState({
            isOn: !this.state.isOn
        })
    }
    render(){
        return(
            <button className='ToggleButton' onClick={this.handleClick}>
                {this.state.buttonName} {this.state.isOn ? "ON" : "OFF"}
            </button>
        );
    }
}

export default Button;