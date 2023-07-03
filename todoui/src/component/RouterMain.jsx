
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
import Footer from "./footer";

//CRUD
import TodoCreate from "./todoCrud/todoCreate";
import TodoList from "./todoCrud/todoList";
import TodoUpdate from "./todoCrud/todoUpdate";


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
<Main/>
              <Switch>
                <Route path="/" exact component={Main}></Route>
                <Route path="/index" component={Main}></Route>

                <Route path="/todo/create" exact component={TodoCreate}></Route>
                <Route path="/todo/update/:id" exact component={TodoUpdate}></Route>
                <Route path="/todo/list" exact component={TodoList}></Route>
                {/**if user send bad request this page goes to main page */}
                <Redirect to="/" />
              </Switch>
            </div>
            <br />
            <Footer copy="Fikri Yigit Vuranok. All rights reserved" />
          </div>
        </Router>
      </>
    );
  }
}

export default RouterMain;
