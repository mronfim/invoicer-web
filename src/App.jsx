import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from 'store'

import Dashboard from 'pages/Dashboard'

import 'styles/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Dashboard />
        </div>
      </Provider>
    );
  }
}

export default App;
