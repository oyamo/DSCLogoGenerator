import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
		<>
			<CssBaseline />
			<AuthProvider>
			<App />
			</AuthProvider>
		</>
	</ThemeProvider>
	,
	document.querySelector('#root'),
);

serviceWorker.register(null);
