import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login'
import Dashboard from './components/Dashboard/Dashboard/Dashboard'
import { createContext, useState } from 'react';
import AllPatients from './components/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AppointmentsByDate from './components/Dashboard/AppointmentsByDate/AppointmentsByDate';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/allPatients">
            <AllPatients></AllPatients>
        </Route>
        <Route path="/addDoctor">
          <AddDoctor></AddDoctor>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
