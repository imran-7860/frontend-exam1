import React from 'react';
import { BrowserRouter as Router, Route, Routes ,Redirect} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Products from './components/Products';
import Login from "./components/Login"
import { useAuth } from './components/AuthContext';

const PrivateRoute =({component: Component, ...rest}) =>{
  const {isAuthenticated} = useAuth();

  return (
    <Route
      {...rest}
      render={(props)=>
      isAuthenticated? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};


const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <PrivateRoute path='/products' element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
