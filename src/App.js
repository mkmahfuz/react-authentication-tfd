import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Destination from "./components/Destination/Destination";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Login1 from "./components/Login/Login1";
import Login2 from "./components/Login/Login2";
import Login3 from "./components/Login/Login3";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/destination3'>
          <Destination></Destination>
        </Route>
        <Route path='/destination/:type'>
          <Destination></Destination>
        </Route>
        <Route path='/blog'>
         <Blog></Blog>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/login1'>
          <Login1></Login1>
        </Route>
        <Route path='/login2'>
          <Login2></Login2>
        </Route>
        <Route path='/login3'>
      <Login3></Login3>
        </Route>
        <Route exact path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
