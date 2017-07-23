import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import App from './App';
import reducer from './services/reducers';

const DEFAULT_ELEMENT_ID = 'medalCount';

const init = (elementId = DEFAULT_ELEMENT_ID, sortOrder) => {

  const store = createStore(reducer, {});

  if(sortOrder) {

  }

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(elementId)
  );

};

const MedalCount = { init };


window.MedalCount = MedalCount;


// TODO: REMOVE WHEN READY TO START RUNNING AS REAL WIDGET
window.MedalCount.init();