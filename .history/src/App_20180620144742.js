import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import InfoPage from './components/InfoPage/InfoPage';
import EmploymentTable from './components/EmploymentTable/EmploymentTable';
import SimpleSelect from './components/SimpleSelect';


import './styles/main.css';

const App = () => (
  <div>
    <Header title="Project Base" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={EmploymentTable}
        />
        
        <Route
          path="/table"
          component={EmploymentTable}
        />
         <Route
          path="/select"
          component={SimpleSelect}
        />
       
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;