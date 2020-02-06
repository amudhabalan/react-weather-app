import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './WeatherApp';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from "./store/reducer";
import { Provider } from "react-redux";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><WeatherApp /></Provider>, document.getElementById('root'));
registerServiceWorker();
