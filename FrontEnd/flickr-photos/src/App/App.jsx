import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from '../Login/flickrbar';
import Login from '../Login/logIn';
import ForgotPassword from '../Login/forgotPassword';
import SendEmail from '../Login/SendEmail';
import HomePage from '../Home/HomePage';
import NavBar from './Navbar';
import Footer from './Footer';
import CameraRoll from './CameraRoll';
import CoverArea from '../Profile/Cover';
import SubNavBar from '../Profile/SubNavBar';
import ProfileContainer from '../Profile/ProfileContainer';
import Faves from '../Profile/faves';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route exact path="/sendemail">
            <SendEmail />
          </Route>
        </Switch>
         <NavBar />
        <CoverArea />

        <div className="pageContent">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
        <Switch>
          <Route path="/About">
            <SubNavBar />
            <ProfileContainer />
          </Route>
          <Route path="/Faves">
            <SubNavBar />
            <Faves />
          </Route>
          <Route path="/cameraroll">
               <CameraRoll /> 
          </Route>
        </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
