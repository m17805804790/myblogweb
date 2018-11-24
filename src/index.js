import React from 'react';
import ReactDOM from 'react-dom';
import FlashMessagesList from './components/flash/FlashMessageList';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';

const store = createStore(rootReducer,applyMiddleware(thunk,logger));

ReactDOM.render(
    <Provider store={ store }>
        <Router routes={routes}>
          <div>
            
            <FlashMessagesList/>
            { routes }
          </div>
        </Router>  
    </Provider>,
    document.getElementById('root')
  );


serviceWorker.unregister();
