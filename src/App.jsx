import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from 'store'

import Dashboard from 'pages/Dashboard'

import 'styles/App.css';

/*

TODO: Authentication

- On login, the server should send the users info as well as the selected company.
  - Add a selected_company_id to the user's profile table. Server should handle
    cases where the selected company was deleted.

*/

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
