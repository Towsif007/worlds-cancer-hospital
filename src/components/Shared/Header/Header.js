import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

  // Navber button   

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">Cancer hospital</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/comments">Comments</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        {/* login and logout */}
        <li className="nav-item">
          {user?.email ?
            <button onClick={logOut} className="btn btn-warning">LogOut 
             </button>:
            <Link className="nav-link" to="/login">Login</Link>}
        </li>
      </ul>
      <span className="navbar-text">
        Signed in as: <a href="#login">{user.displayName}</a>
      </span>
    </div>
  </div>
</nav>
</div>
    );
};

export default Header;