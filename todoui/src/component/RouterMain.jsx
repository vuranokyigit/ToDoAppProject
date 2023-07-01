import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Update from './Update';

// i18n 
import { withTranslation } from 'react-i18next';


import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

class RouterMain extends Component {

    static displayName = "Todo_Router"

    constructor(props) {
        super(props);
    }
    render() {

        return (
            <React.Fragment>
                <Router>
                    <Header/>
                    
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={Main}></Route>
                            <Route path="/update/:id" component={Update}></Route>
                            <Redirect to="/" />
                        </Switch>
                    </div>

                    <Footer/>
                </Router>
            </React.Fragment>
        ) //end return
    } // end render
}//end clas
export default withTranslation()(RouterMain) 