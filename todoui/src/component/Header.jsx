import React, { Component } from 'react'

// OtherLanguageReusability
import OtherLanguageReusability from '../internationalization/OtherLanguageReusability';

class Header extends Component {

    static displayName = "Todo_Header"

    render() {

        return (
            <header>
                <div className="header-inline">
                    {/* HEADER NAME */}
                    <h1 className="text-center">TODOAPP</h1>

                    {/* Translation Component */}
                    <OtherLanguageReusability />
                </div>
            </header>
        ) //end return
    } // end render
}//end clas

export default Header;



