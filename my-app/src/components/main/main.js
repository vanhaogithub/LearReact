import React from 'react';
import '../../css/main.css'
import {connect} from 'react-redux';

class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(!this.props.actionFood){
            return (<h2>Select a food</h2>)
        }
        return(
            <div className='main'>
                <p>ID: {this.props.actionFood.id}</p>
                <p>Name: {this.props.actionFood.name}</p>
                <p>CreateDate: {this.props.actionFood.createDate}</p>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        actionFood: state.actionFood
    }
}
export default connect(mapStateToProps)(Main);