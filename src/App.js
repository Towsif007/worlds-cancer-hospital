import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Details from './components/Details/Details/Details';
import Comments from './components/Home/Comments/Comments';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Notfound from './components/Notfound/Notfound';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div>
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
      <Route path="/about">
      <About></About>
      </Route>
      <Route path="/comments">
      <Comments></Comments>
      </Route>
      <Route path="/login">
      <Login></Login>
      </Route>
      <Route path="/details/:servicecareId">
      <Details></Details>
      </Route>
      <Route path="*">
      <Notfound></Notfound>
      </Route>
      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;





