import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store, { history } from './redux/store/store';
import {HistoryRouter as Router } from "redux-first-history/rr6";


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
);
