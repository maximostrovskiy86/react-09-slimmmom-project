import {configureStore} from "@reduxjs/toolkit";
import {dailyCalorieIntakeReducer} from "./dailyCalorieIntake/dailyCalorieIntakeSlice";
import {authReducer} from "./auth/authSlice";

const store = configureStore({
	reducer: {
		dailyCalorieIntake: dailyCalorieIntakeReducer,
		// auth: authReducer,
	}
});

export default store;

