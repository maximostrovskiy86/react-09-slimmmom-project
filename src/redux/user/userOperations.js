import {createAsyncThunk} from "@reduxjs/toolkit";
import authOperations from "../auth/authOperations";
import axios from "axios";


export const getUserDailyRateById = createAsyncThunk('user/dailyRate',
	async (idUSer, thunkAPI) => {
		const state = thunkAPI.getState();
		const useId = state.auth.user.id;
		
		try {
			const response = await axios.post(`/daily-rate/${useId}`);
			authOperations.token.set(response.data.accessToken);
			console.log("User", response);
			
			return response;
		} catch (err) {
			console.log("LoginErrror", err);
			return thunkAPI.rejectWithValue(err);
		}
	});
