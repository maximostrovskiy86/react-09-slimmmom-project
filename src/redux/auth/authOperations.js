import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	unset() {
		axios.defaults.headers.common.Authorization = "";
	},
};

const register = createAsyncThunk('auth/register',
	async (credentials, thunkAPI) => {
		try {
			return await axios.post('/auth/register', credentials);
			
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message);
		}
	});

const login = createAsyncThunk('auth/login',
	async (credentials, thunkAPI) => {
		try {
			const response = await axios.post('/auth/login', credentials);
			token.set(response.data.accessToken);
			// console.log("LoginUser", response);
			
			return response;
		} catch (err) {
			// console.log("LoginErrror", err);
			return thunkAPI.rejectWithValue(err);
		}
	});

const logOut = createAsyncThunk('auth/logout',
	async (_, thunkAPI) => {
		try {
			const response = await axios.post('/auth/logout');
			token.unset();
			return response;
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message);
		}
	})

const refreshCurrentUser = createAsyncThunk('auth/refresh',
	async (credentialsSid, thunkAPI) => {
		// console.log("thunkAPI", thunkAPI)
		const state = thunkAPI.getState();
		const persistToken = state.auth.refreshToken;
		
		if (persistToken === null) {
			return thunkAPI.rejectWithValue();
		}
		
		token.set(persistToken);
		try {
			const response = await axios.post('/auth/refresh', credentialsSid);
			return response;
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message);
		}
	})

const authOperations = {
	register,
	login,
	logOut,
	refreshCurrentUser
}

export default authOperations;