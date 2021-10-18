import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Services from "./components/Services/Services";
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
            <Route path="/services">
              <Services></Services>
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