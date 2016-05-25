import React, { Component } from 'react';
import { Provider } from 'react-redux';
import NoteApp from './NoteApp';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import { getLocalStorage } from '../actions';

const notes = getLocalStorage();
const store = createStore(rootReducer, { notes: notes });

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NoteApp />
      </Provider>
    )
  }
}
