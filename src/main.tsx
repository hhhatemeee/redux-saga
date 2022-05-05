import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { HistoryRouter as Router } from "redux-first-history/rr6";

import App from './pages/App'
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import store, { history } from './redux/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router history={history}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/post' element={<Post />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </Provider >
)
