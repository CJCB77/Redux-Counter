import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Import redux store
import {Provider} from "react-redux"
import store from "./Store/index"

ReactDOM.render(
  //Given every component access to the store
  <Provider store={store}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
