import React from 'react';

import tr from "../component/img/flag/tr.png"
import en from "../component/img/flag/en.png"

import { withTranslation } from 'react-i18next';
import OtherLanguageServices from "./OtherLanguageServices";

import { Link } from 'react-router-dom';

function OtherLanguageReusability(props) {

    const internationalizationLanguage = language => {
        
        const { i18n } = props;
        i18n.changeLanguage(language);

        //Hem java tarafından hemde frontend tarafından değişiklik yaptık.
        OtherLanguageServices.headerLanguageServices(language);
    }


    return (
        <React.Fragment>

            <div className="translate-link">
                <Link className="nav-link" to="" onClick={() => internationalizationLanguage('tr')}>
                    <img src={tr} style={{ height: "20px" }} alt="TR" />
                </Link>


                <Link className="nav-link" to="" onClick={() => internationalizationLanguage('en')}>
                    <img src={en} style={{ height: "15px" }} alt="EN" /></Link>

            </div>
        </React.Fragment>
    ) // end return
} // end OtherLanguageReusability

export default withTranslation()(OtherLanguageReusability)

