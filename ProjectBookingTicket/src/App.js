import React, { Fragment } from 'react';
import './App.scss';
import HomePage from './Screens/Home';
import SignUp from './Screens/SignUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Detail from './Screens/Detail';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/detail/:movieId" component={Detail} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
