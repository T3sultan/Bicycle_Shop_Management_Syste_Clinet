import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Dashboard from './components/Dashboard/Dashboard';
import Reviews from './components/Reviews/Reviews';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddProducts from './components/AddProducts/AddProducts';
// import MyOrders from './components/Dashboard/MyIOrders/MyOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/addProducts'>
              <AddProducts />
            </Route>
            <Route exact path='/products'>
              <Products />
            </Route>
            <PrivateRoute exact path='/productDetails/:productsId'>
              <ProductDetails />
            </PrivateRoute>
            <Route exact path='/reviews'>
              <Reviews />
            </Route>

            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/register'>
              <Register />
            </Route>
            <Route exact path='*'>
              <PageNotFound />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
