import { createStore } from 'redux';

export const addTask = (taskItem) => {
    return {type: 'task/addTask', payload: taskItem};
};

export const removeTask = (taskItem) => {
    return {type: 'task/removeTask', payload: taskItem};
};

const initialState = [];

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'task/addTask':
            return [...state, action.payload];
        case 'task/removeTask':
            const updatedState = state.filter(taskItem => taskItem.taskNum !== action.payload);
            return updatedState;
        default:
            return state;
    }
}

export const store = createStore(taskReducer);