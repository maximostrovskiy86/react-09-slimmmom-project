import {createSlice} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";
import authOperations from "./authOperations";


const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ["refreshToken", "accessToken", "sid"],
}

const initialState = {
	accessToken: null,
	refreshToken: null,
	sid: null,
	todaySummary: {
		date: null,
		kcalLeft: null,
		kcalConsumed: null,
		dailyRate: null,
		percentsOfDailyRate: null,
		userId: "",
		id: "",
	},
	user: {
		username: null,
		userData: {
			notAllowedProducts: [],
		}
	},
	id: "",
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
				// console.log("ACTION", action)
				state.user = action.payload;
				state.isLoggedIn = true;
			})
			.addCase(authOperations.login.fulfilled, (state, action) => {
				state.accessToken = action.payload.data.accessToken;
				state.refreshToken = action.payload.data.refreshToken;
				state.sid = action.payload.data.sid;
				state.todaySummary = action.payload.data.todaySummary;
				state.user.username = action.payload.data.user.username;
				state.isLoggedIn = true;
			})
			.addCase(authOperations.logOut.fulfilled, (state, _) => {
				state.accessToken = null;
				state.refreshToken = null;
				state.sid = null;
				state.isLoggedIn = false;
			})
			.addCase(authOperations.refreshCurrentUser.fulfilled, (state, action) => {
				console.log("ACTION", action)
				state.accessToken = action.payload.data.newAccessToken;
				state.refreshToken = action.payload.data.newRefreshToken;
				state.sid = action.payload.data.sid;
				state.isLoggedIn = true;
			})
	},
});

export const authReducer = persistReducer(
	authPersistConfig,
	authSlice.reducer
);

// export const authReducer = authSlice.reducer;