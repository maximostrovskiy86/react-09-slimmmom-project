import {createSlice} from "@reduxjs/toolkit";


const dailyCalorieIntakeSlice = createSlice({
	name: "dailyCalorieIntake",
	initialState: {
		userDailyCalories: {
			"weight": null,
			"height": null,
			"age": null,
			"desiredWeight": null,
			"bloodType": null
		},
		items: {
			dailyRate: null,
			notAllowedProducts: [],
		}
	},
	reducers: {
		fetchingDailyCalorieIntakeInProgress(state) {
			state.isLoading = true;
		},
		fetchingDailyCalorieIntakeSuccess(state, action) {
			state.isLoading = false;
			state.error = null;
			// state.items = {...state.items, ...action.payload}; // классика обновления
			state.items = action.payload;  // Immer сам преобразует обновление в Slice
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

