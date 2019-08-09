import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import TopNav from "./components/pages/nav/TopNav";
import { Provider } from "react-redux";
import store from "./store";

import { Container } from "react-bootstrap"
import OrderPage from "./components/pages/OrderPage";
import AdminDashboardPage from "./components/pages/AdminDashboardPage";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import AdminPage from "./components/pages/AdminPage";
import ContactPage from "./components/pages/ContactPage";
import BottomNav from "./components/pages/nav/BottomNav";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          
        <div className="App">
          <Container>
            <TopNav />
          </Container>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/order" component={OrderPage} />
              <Route exact path="/admin" component={AdminDashboardPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/login" component={AdminPage} />
              <Route exact path="/contact" component={ContactPage} />



            </Switch>
            <Container>
              <BottomNav />
            </Container>
        </div>
        
        </Provider>
      </BrowserRouter>
     
    );
  }
}

export default App;
