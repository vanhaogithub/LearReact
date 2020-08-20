import React from 'react';
import '../../css/main.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFood} from '../../actions'

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    createListItems () {
        let listItems = this.props.foods.map(
            (food) => {
                return (
                <li key={food.id}
                onClick = {
                    () => {this.props.selectFood(food)}
                }
                >Food name : {food.name}
                </li>
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
function mapDispatchToProps(dispatch){
    return bindActionCreators({selectFood: selectFood}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);