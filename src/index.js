import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
// import Card from './Card';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots} )
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  // <React.StrictMode>
       <Provider store={store}>
          <App  />
       </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// ReactDOM.render(
//   <React.StrictMode>
//         <div>
//           <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
//           <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
//           <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
//         </div>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

