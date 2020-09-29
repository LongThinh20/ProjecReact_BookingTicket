import React from 'react';
import './App.scss';
import HomePage from './Screens/HomeMoule/Home';
import SignUp from './Screens/HomeMoule/SignUp';
import DetailMovie from './Screens/HomeMoule/Detail';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PageNotFound from './Screens/PageNotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './Screens/HomeMoule/SignIn';
import Booking from './Screens/HomeMoule/Booking';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
       
        <Route path="/detail/:Id" component={DetailMovie} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/booking/:Id" component={Booking} />
        <Route path="/" component={HomePage} />
        <Route path="" component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
