import {ActionType} from '../actions/actionType';

export default (state = {}, action) =>{
    switch (action.type) {
        case ActionType.SELECT_FOOD:
            return action.payload;
        default:
            return {};
    }
}
