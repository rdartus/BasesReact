// import modules node
import React from 'react';
import {render} from 'react-dom';

//import styles
import css from './styles/style.styl';

//import components
import App from './comp/App.js';
import Photogrid from './comp/PG.js';
import Single from './comp/Single.js';

//import react rputer
import{Router,Route,IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import store,{history} from './store';

const router =(
  <Provider store={store}>
  <Router history = {history}>
    <Route path='/' component={App}>
      <IndexRoute component={Photogrid}></IndexRoute>
      <Route path='/view/:postId' component={Single}></Route>
    </Route>
  </Router>
  </Provider>
)
render (router, document.getElementById('root'));
