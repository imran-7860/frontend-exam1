import React from 'react'
import {Link} from "react-router-dom"
import {useAuth} from "./AuthContext";

const NavigationBar = () => {
  const {isAuthenticated ,logout} = useAuth();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          {
            isAuthenticated ? (
              <button onClick={logout}>Logout</button>
            ):(
              <Link to="/login">Login</Link>
            )
          }
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar