import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);
