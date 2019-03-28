import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from 'store'

import Topbar from 'components/Topbar'
import SideNav from 'components/SideNav'
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
        <BrowserRouter>
          <div className="App">
            <Topbar />
            <SideNav />
            <Dashboard />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
