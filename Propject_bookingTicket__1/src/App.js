import React, { Fragment, useEffect } from 'react';
import './App.scss';
import HomePage from './Screens/HomeMoule/Home';
import SignUp from './Screens/HomeMoule/SignUp';
import Footer from './Components/Footer';
import PageNotFound from './Screens/PageNotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './Screens/HomeMoule/SignIn';
import Booking from './Screens/HomeMoule/Booking';
import { useDispatch } from 'react-redux';
import Header1 from './Components/Header1';
import DetailMovie1 from './Screens/HomeMoule/Detail1';

import Demo from './Components/Demo'

function App() {

  const dispatch = useDispatch();
  const getCredentialFormLocal = () => {


    const credentialStr = localStorage.getItem('credentials');
    if (credentialStr) {

      dispatch({
        type: 'FETCH_CREDENTIALS',
        payload: JSON.parse(credentialStr)
      })
    }
  }

  useEffect(() => {
    getCredentialFormLocal();
  }, [])

  return (
    <BrowserRouter>
      <Fragment>
        <div className="App">
          <header className="App-header">

          </header>
        </div>

        <Header1 />
        <Switch>
          <Route path="/detail/:Id" component={DetailMovie1} />
          <Route path="/signup" component={SignUp} />
          <Route path="/demo" component={Demo} />
          <Route path="/signin" component={SignIn} />
          <Route path="/booking/:Id" component={Booking} />
          <Route path="/" component={HomePage} />
          <Route path="" component={PageNotFound} />
        </Switch>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

