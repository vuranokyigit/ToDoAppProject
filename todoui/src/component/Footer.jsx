import React, { Component } from 'react'

import { withTranslation } from 'react-i18next';


class Footer extends Component {

  static displayName = "ToDo_Footer";

  render() {

    const { t } = this.props;

    return (
        <footer id="footer_id">
          <section className="text-center bg-dark text-white" id="footer_copy_right">
            <div className="container-fluid">
              {/* FOOTER INFO */}
              2023 &copy;  {t('footer_info')} <a href="#"> {t('footer_desinger')}</a>
            </div>
          </section>
        </footer>
    ) //end return
  } // end render
}//end clas

export default Footer;
