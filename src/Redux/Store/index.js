import { configureStore } from "@reduxjs/toolkit";
import allsongs from "../reducers";
import { useDispatch } from "react-redux";
import thunk from 'redux-thunk';
import { combineReducers } from "redux";
const store = configureStore({

    reducer:combineReducers({allsongs}),

    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
		}).concat(thunk),

    
});
export const useAppDispatch = () => useDispatch();
console.log(useAppDispatch)
export default store;