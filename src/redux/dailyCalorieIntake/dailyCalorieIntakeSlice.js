import {createSlice} from "@reduxjs/toolkit";


const dailyCalorieIntakeSlice = createSlice({
	name: "dailyCalorieIntake",
	initialState: {
		"weight": null,
		"height": null,
		"age": null,
		"desiredWeight": null,
		"bloodType": null
	},
	reducers: {
		fetchingDailyCalorieIntakeInProgress(state) {
			state.isLoading = true;
		},
		fetchingDailyCalorieIntakeSuccess(state, action) {
			console.log("action", action.payload)
			state.isLoading = false;
			state.error = null;
			state.items = action.payload;
		},
		fetchingDailyCalorieIntakeError(state, action) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {
	fetchingDailyCalorieIntakeInProgress,
	fetchingDailyCalorieIntakeSuccess,
	fetchingDailyCalorieIntakeError
} = dailyCalorieIntakeSlice.actions;

export const dailyCalorieIntakeReducer = dailyCalorieIntakeSlice.reducer;

