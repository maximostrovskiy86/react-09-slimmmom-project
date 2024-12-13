import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

const register = createAsyncThunk('auth/register',
	async (credentials, thunkAPI) => {
		console.log('credentials', credentials)
		try {
			const response = await axios.post('/auth/register', {...credentials});
			return response;
		} catch (err) {
			// console.error(err);
			console.log(err);
			return thunkAPI.rejectWithValue(err.message);
		}
	});

const authOperations = {
	register
}

export default authOperations;