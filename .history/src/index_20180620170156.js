import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from './redux/reducers';
import injectTapEventPlugin from 'react';
import App from './App';
import rootSaga from './redux/sagas';


 
// Initializing to an empty object, but here is where you could
// preload your redux state with initial values (from localStorage, perhaps)
const preloadedState = {};
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(...middlewares),
);
var Main = React.createClass({
  render: function() {
    return (
      <a
        href="#"
        onTouchTap={this.handleTouchTap}
        onClick={this.handleClick}>
        Tap Me
      </a>
    );
  },
 
  handleClick: function(e) {
    console.log("click", e);
  },
 
  handleTouchTap: function(e) {
    console.log("touchTap", e);
  }
});
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
