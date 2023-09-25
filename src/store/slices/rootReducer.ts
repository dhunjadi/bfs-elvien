import {combineReducers} from '@reduxjs/toolkit';
import {gymnastSlice} from './gymnastSlice';

export const rootReducer = combineReducers({
    [gymnastSlice.name]: gymnastSlice.reducer,
});

export default rootReducer;
