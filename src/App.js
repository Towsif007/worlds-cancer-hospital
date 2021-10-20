import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Details from './components/Details/Details/Details';
import Comments from './components/Home/Comments/Comments';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/Privateroute/PrivateRoute';
import Notfound from './components/Notfound/Notfound';

import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import Register from './components/Register/Register';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
      <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>
      <Route path="/home">
      <Home></Home>
      </Route>
      <Route path="/home">
      <Home></Home>
      </Route>
      <PrivateRoute path="/about">
      <About></About>
      </PrivateRoute>
      <PrivateRoute path="/comments">
      <Comments></Comments>
      </PrivateRoute>
      <Route path="/login">
      <Login></Login>
      </Route>
      <Route path="/register">
      <Register></Register>
      </Route>
      <PrivateRoute path="/details/:servicecareId">
      <Details></Details>
      </PrivateRoute>
      <Route path="*">
      <Notfound></Notfound>
      </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;





