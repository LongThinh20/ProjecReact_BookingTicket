import React, { Fragment, useEffect } from 'react';
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
import usePageLoading from './Components/Hook/usePageLoading';
// import Demo from './Components/ShowLoader'




function App() {

  const [loader, showLoader, hideLoader] = usePageLoading();

  const dispatch = useDispatch();
  const getCredentialFormLocal = () => {

    showLoader();

    const credentialStr = localStorage.getItem('credentials');
    if (credentialStr) {

      hideLoader();

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
      <Fragment>
        <div className="App">
          <header className="App-header">

          </header>
        </div>

        <Header1 />
        <Switch>
          <Route path="/detail/:Id" component={DetailMovie1} />
          <Route path="/signup" component={SignUp} />
          {/* <Route path="/demo" component={demo} /> */}
          <Route path="/signin" component={SignIn} />
          <Route path="/booking/:Id" component={Booking} />
          <Route path="/" component={HomePage} />
          <Route path="" component={PageNotFound} />
        </Switch>
        <Footer />
        {loader}
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
