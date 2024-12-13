import {createSlice} from '@reduxjs/toolkit'
import authOperations from "./auth-operations";

const initialState = {
	user: {name: null, email: null, password: null},
	token: null,
	isLoggedIn: false,
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	// extraReducers:  {
	// 	[authOperations.register.fulfilled](state, action) {
	// 		state.user = action.payload.user;
	// 		state.token = action.payload.token;
	// 		state.isLoggedIn = true;
	// 	},
	extraReducers: builder => {
		builder
			.addCase(authOperations.register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = action.payload;
			})
	},
});

export const authReducer = authSlice.reducer;