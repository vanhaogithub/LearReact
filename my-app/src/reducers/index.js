import FoodReducer from './foods-reducer';
import UserReducer from './users-reducer';
import ActionFoodReducer from './action-foods-reducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    foods: FoodReducer,
    users: UserReducer,
    actionFood: ActionFoodReducer
})

export default allReducers;