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
	isLoading: false,
	error: null,
}


const handlePending = state => {
	state.isLoading = true;
};

const handleRejected = (state, action) => {
	console.log("actionREg", action)
	state.isLoading = false;
	state.error = action.payload;
};

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
			// register reducer
			.addCase(authOperations.register.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(authOperations.register.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoggedIn = true;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(authOperations.register.rejected, (state, action) => {
				console.log("ACTION_reject", action)
				state.isLoading = false;
				state.error = action.payload;
			})
			
			// login reducer
			.addCase(authOperations.login.pending, handlePending)
			.addCase(authOperations.login.fulfilled, (state, action) => {
				state.accessToken = action.payload.data.accessToken;
				state.refreshToken = action.payload.data.refreshToken;
				state.sid = action.payload.data.sid;
				state.todaySummary = action.payload.data.todaySummary;
				state.user.username = action.payload.data.user.username;
				state.isLoggedIn = true;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(authOperations.login.rejected, handleRejected)
			
			// logOut reducer
			.addCase(authOperations.logOut.pending, handlePending)
			.addCase(authOperations.logOut.fulfilled, (state, _) => {
				state.accessToken = null;
				state.refreshToken = null;
				state.sid = null;
				state.isLoggedIn = false;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(authOperations.logOut.rejected, handleRejected)
			
			
			.addCase(authOperations.refreshCurrentUser.fulfilled, (state, action) => {
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