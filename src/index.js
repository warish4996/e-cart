import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './pages/landingPage'
import LoginPage from './pages/loginPage'
import CartPage from './pages/cartPage'
import AdminPage from './pages/adminPage'
import SingupPage from './pages/singupPage'
import OrderPage from './pages/orderPage'
import * as serviceWorker from './serviceWorker';
import Store from './redux/store/store'
import 'react-toastify/dist/ReactToastify.css';


// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';



const IndexApp = () => {
  return (
      <Provider store={Store}>
          <Router>
            <Switch>
            <Route path='/main-page' exact component={LandingPage} />
            <Route path='/login' exact component={LoginPage} />
            <Route path='/cart' exact component={CartPage} />
            <Route path='/admin' exact component={AdminPage} />
            <Route path='/singup' exact component={SingupPage} />
            <Route path='/order' exact component={OrderPage} />
            <Redirect to='/main-page' exact />
            </Switch>
          </Router>
      </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <IndexApp />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.register();
