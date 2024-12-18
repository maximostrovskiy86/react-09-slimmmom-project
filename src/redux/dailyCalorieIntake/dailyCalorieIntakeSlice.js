import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	dailyRate: null,
	notAllowedProducts: [],
}

const dailyCalorieIntakeSlice = createSlice({
	name: "dailyCalorieIntake",
	initialState,
	reducers: {
		fetchingDailyCalorieIntakeInProgress(state) {
			// state.isLoading = true;
		},
		fetchingDailyCalorieIntakeSuccess(state, action) {
			// state.isLoading = false;
			// state.error = null;
			state.dailyRate = action.payload.dailyRate;  // Immer сам преобразует обновление в Slice
			state.notAllowedProducts = action.payload.notAllowedProducts;  // Immer сам преобразует обновление в Slice
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

