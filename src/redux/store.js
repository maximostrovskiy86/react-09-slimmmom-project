import { configureStore } from "@reduxjs/toolkit";
import { dailyCalorieIntakeReducer } from "./dailyCalorieIntake/dailyCalorieIntakeSlice";

const store = configureStore({
	reducer: dailyCalorieIntakeReducer,
});

export default store;

