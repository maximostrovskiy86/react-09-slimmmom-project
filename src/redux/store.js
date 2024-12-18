import {configureStore} from "@reduxjs/toolkit";
import {
	persistStore,
	// FLUSH,
	// REHYDRATE,
	// PAUSE,
	// PERSIST,
	// PURGE,
	// REGISTER,
} from 'redux-persist';
import {dailyCalorieIntakeReducer} from "./dailyCalorieIntake/dailyCalorieIntakeSlice";
import {authReducer} from "./auth/authSlice";

// const middleware = (getDefaultMiddleware) =>
// 	 getDefaultMiddleware({
// 		serializableCheck: {
// 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 		},
// 	});


export const store = configureStore({
	reducer: {
		dailyCalorieIntake: dailyCalorieIntakeReducer,
		auth: authReducer,
	},
	// middleware: (getDefaultMiddleware) => {
	// 	return getDefaultMiddleware({
	// 		serializableCheck: {
	// 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	// 		},
	// 	})
	// }
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);

