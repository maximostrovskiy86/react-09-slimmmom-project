import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {ThemeProvider} from '@emotion/react'

import store from './redux/store';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider>
					<App/>
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);