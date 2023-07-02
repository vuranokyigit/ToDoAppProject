//There will be contact information
//There will be location information
//There will be copyright information
//there will be useful links for other contributors
//there will be backtop for page style

import React, { Component } from "react";


class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Fikri Yigit Vuranok. All rights reserved.</p>              
                </footer>
            </>
        )
    }

}
export default Footer;