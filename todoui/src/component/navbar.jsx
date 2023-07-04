import React, { Component } from "react";
import { withRouter } from "react-router-dom"; // withRouter 

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  handleClickHome = () => {
    this.props.history.push("/");//goes to home page
  };

  handleClickList = () => {
    this.props.history.push("/todo/list"); //goes to list
  };

  render() {
    return (
      <>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">
              Toggleable via the navbar brand.
            </span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="togglePage">
              <div className="home" onClick={this.handleClickHome}>
                <i class="fa-solid fa-house text-light"></i>
              </div>
              <div className="list" onClick={this.handleClickList}>
                <i class="fa-solid fa-list text-light"></i>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default withRouter(Navbar);
