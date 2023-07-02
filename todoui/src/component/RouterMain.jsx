
import React, { Component } from "react";
//BrowserRouter as Router URL = "http://localhost:3000";
//backend icin networku butun detayina kadar bana goster
//HashRouter as Router URL = "http://localhost:3000/#";
//backendden verisini kendime gore sinirlandirarrak guvene aliyoeum
//import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './todo.css';

//NAVBAR, MAIN, FOOTER
import Navbar from './navbar';
import Main from './todocalendar/main';
import Footer from './footer';

class RouterMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar />
            <br />
            <div className="container">
              <Switch>
                <Route path="/" exact component={Main}></Route>
                <Route path="/index" exact component={Main}></Route>
                <Route path="/todo/create" exact component={Main}></Route>
                <Route path="/todo/update/:id" exact component={Main}></Route>
                <Route path="/todo/list" exact component={Main}></Route>
                <Route path="/todo/view/:id" exact component={Main}></Route>
                {/**if user send bad request this page goes to main page */}
                <Redirect to="/"/> 
              </Switch>
            </div>
            <br />
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}

export default RouterMain;
