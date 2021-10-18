import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import BookAppoinment from "./components/BookAppoinment/BookAppoinment";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Services from "./components/Services/Services";
import Signup from "./components/Signup/Signup";
import AuthProvider from "./context/AuthProvider";
import ServicesProvider from "./context/ServicesProvider";

const App = () => {
  return (
    <AuthProvider>
      <ServicesProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/bookappoinment">
              <BookAppoinment></BookAppoinment>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </ServicesProvider>
    </AuthProvider>
  );
};

export default App;
