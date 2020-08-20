import {ActionType} from './actionType';
export const selectFood = (food) => {
    console.log(`You select food name = ${food.name}`);
    return {
        type: ActionType.SELECT_FOOD,
        payload: food
    }
}