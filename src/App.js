import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Dashboard from './components/Dashboard/Dashboard';
import Reviews from './components/Reviews/Reviews';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/products'>
            <Products></Products>
          </Route>
          <Route exact path='/productDetails/:productsId'>
            <ProductDetails></ProductDetails>
          </Route>
          <Route exact path='/reviews'>
            <Reviews></Reviews>
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route exact path='*'>
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
