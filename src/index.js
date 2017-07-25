import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './services/rootReducer';
import { fetchCountries } from './services/countries/actionCreators';
import { changeSort } from './services/sorting/actionCreators';

const DEFAULT_ELEMENT_ID = 'mcMedalCount';

/**
 * Append a stylesheet link tag to the head
 *
 * @param path
 */
const appendCssToHead = (path) => {
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = path;
  head.appendChild(style);
};

/**
 * Init the Medal Count widget
 *
 * @param elementId
 * @param sortOrder
 */
const init = (elementId = DEFAULT_ELEMENT_ID, sortOrder) => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware( thunkMiddleware )
  ));

  if(sortOrder) {
    store.dispatch(changeSort(sortOrder))
  }

  store.dispatch(fetchCountries());

  // This should really be an absolute path to the css file
  // Could be in an s3 bucket like the other assets
  appendCssToHead('/css/mc_style.css');


  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(elementId)
  );

};

const McMedalCount = { init };

// Make available globally under namespace
window.McMedalCount = McMedalCount;