import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';
import { setCurrentUser,setCurrentPermission } from './actions/LoginActions';
import jwtDecode from 'jwt-decode';
import './index.less';

let store;
if(process.env.NODE_ENV==="development"){
   store = createStore(rootReducer,applyMiddleware(thunk,logger));
}else{
   store = createStore(rootReducer,applyMiddleware(thunk));
}
if (localStorage.jwtToken) {
  // setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken).username));
  store.dispatch(setCurrentPermission(jwtDecode(localStorage.jwtToken).permission))
}

ReactDOM.render(
    <Provider store={ store }>
        <Router routes={routes}>
          <div>
            { routes }
          </div>
        </Router>  
    </Provider>,
    document.getElementById('root')
  );


serviceWorker.unregister();
