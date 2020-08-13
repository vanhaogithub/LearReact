import React from 'react';
import '../../css/button.css'

class Inheritance extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                {this.props.btn1}
                {this.props.btn2}
                {this.props.children}
            </div>
        );
    }
}

export default Inheritance;