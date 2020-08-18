import React from 'react';
import '../../css/main.css'
import {connect} from 'react-redux'

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    createListItems () {
        let listItems = this.props.foods.map(
            (food) => {
                return (
                <li key={food.id}>Food name : {food.name}</li>
                )
            }
        )
        return listItems;
    }
    render(){
        return(
            <ul className='menu'>
                {this.createListItems()}
            </ul>
        );
    }
}
function mapStateToProps(state){
    return {
        foods: state.foods
    }
}
export default connect(mapStateToProps)(Menu);