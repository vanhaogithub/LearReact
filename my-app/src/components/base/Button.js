import React from 'react';
import '../../css/button.css'

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOn: true
        }
    }
    handleClick =() => {
        this.setState({
            isOn: !this.state.isOn
        })
    }
    render(){
        return(
            <button className='ToggleButton' onClick={this.handleClick}>
                {this.props.name} {this.state.isOn ? "ON" : "OFF"}
            </button>
        );
    }
}

export default Button;