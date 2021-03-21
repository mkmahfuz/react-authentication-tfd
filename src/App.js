import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Destination from "./components/Destination/Destination";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Login1 from "./components/Login/Login1";
import Login2 from "./components/Login/Login2";
import Login3 from "./components/Login/Login3";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
export const RideContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [rideType, setRideType] = useState('');

  return (
    <>
      {/* <h1>test {loggedInUser.email}</h1> */}
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <RideContext.Provider value={[rideType, setRideType]}>
          <Router>
            <Header user={loggedInUser}></Header>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <PrivateRoute path='/destination'>
                <Destination></Destination>
              </PrivateRoute>
              <PrivateRoute path='/destination3/:type'>
                <Destination></Destination>
              </PrivateRoute>
              <PrivateRoute path='/blog'>
                <Blog></Blog>
              </PrivateRoute>
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
            <Footer></Footer>
          </Router>
        </RideContext.Provider>
      </UserContext.Provider>

    </>

  );
}

export default App;
