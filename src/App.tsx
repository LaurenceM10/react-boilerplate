import React from 'react'
import store from 'app/store'
import {Provider} from "react-redux";
import AppView from './app-view'

function App() {
  return (
      <Provider store={store}>
        <AppView />
      </Provider>
  )
}

export default App
