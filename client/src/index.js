import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1B585D"
        }
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <CssBaseline />
            <App />
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);