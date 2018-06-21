import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './styles/main.css';

import Header from './components/Header/Header';
import EmploymentTable from './components/EmploymentTable/EmploymentTable';
import InputForm from './components/InputForms/CompanyNameForm';



const App = () => (
  <div>
    <Header className="header" title="To whom I have applied" />
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
          path="/input"
          component={InputForm}
        />
       
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
