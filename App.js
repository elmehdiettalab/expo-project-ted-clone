import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import MainApp from './MainApp';
import {createStore , applyMiddleware, compose} from 'redux'; 
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import reducer from './src/state-management/reducer'; 

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))


export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
