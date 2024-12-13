import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {ThemeProvider} from '@emotion/react'
import {theme} from "./theme";

import store from './redux/store';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<App/>
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);