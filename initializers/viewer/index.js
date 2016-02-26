/* global __CLIENT__ */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// TODO Выделить только стили без редактирования
import 'viewer_styles';

import createStore from './store';
import LandingLoader from 'components/LandingLoader';
import ShowApplication from 'components/ShowApplication';
import initialState from 'constants/initialState';

import config from 'constants/config';

import { semverInit } from 'lib/semver';
semverInit();

if (__CLIENT__) {
  window.React = React;
  window.ReactDOM = ReactDOM;
}

global.ShowDemo = () => {
  const store = createStore(initialState);

  return (
    <Provider store={store}>
      <LandingLoader params={ { landingVersionUuid: config('landingVersionUuid') } }>
        <ShowApplication />
      </LandingLoader>
    </Provider>
  );
};

global.ShowWrapper = (props) => {
  const store = createStore(props);

  return (
    <Provider store={store}>
      <ShowApplication />
    </Provider>
  );
};
