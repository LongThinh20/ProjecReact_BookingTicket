import React, { useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import Header1 from './Components/Header1';
import DetailMovie1 from './Screens/HomeMoule/Detail1';




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
    getCredentialFormLocal()
  }, [])


  return (
    <BrowserRouter>
      <Header1 />
      <Switch>

        <Route path="/detail/:Id" component={DetailMovie1} />
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
