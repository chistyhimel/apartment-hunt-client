import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ApartmentDetails from "./components/ApartmentDetails/ApartmentDetails";
import BookingList from "./components/Dashboard/BookingList";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider
    value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/details/:apartmentName">
            <ApartmentDetails></ApartmentDetails>
          </Route>
 
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/bookinglist">
            <BookingList></BookingList>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
