import axios from "axios";
import {
	fetchingDailyCalorieIntakeInProgress,
	fetchingDailyCalorieIntakeSuccess,
	fetchingDailyCalorieIntakeError
} from "./dailyCalorieIntakeSlice";

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

export const fetchDailyCalorieIntake = (userData) => async dispatch => {
	console.log("userData", userData)
	try {
		// Индикатор загрузки
		dispatch(fetchingDailyCalorieIntakeInProgress());
		// HTTP-запрос
		const response = await axios.post("/daily-rate", userData);
		// Обработка данных
		console.log("response", response.data);
		dispatch(fetchingDailyCalorieIntakeSuccess(response.data));
	} catch (e) {
		// Обработка ошибки
		dispatch(fetchingDailyCalorieIntakeError(e.message));
	}
};