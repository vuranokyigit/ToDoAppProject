import React, { Component } from 'react'

// i18n 
import { withTranslation } from 'react-i18next';

class Input extends Component {

    static displayName = "Input";

    // CONSTRUCTOR
    constructor(props) {
        super(props);
    }

    render() {
        const { t } = this.props;
        return (
            <form className="create_form" method='post' autoComplete='true'>
                <div className='inputBox'>
                    <div className="row">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <i className="fa-solid fa-rectangle-list"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder={t('new_todo_input')}
                                id="testid"
                                name="test"
                                required={true}
                                onChange={this.props.onChangeInputValue}
                            />
                        </div>
                        <div className="row">
                            <button className="btn text-white myButton"
                                onClick={this.props.todoCreateSubmit}>
                                {t('add_new_task')}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        ) // end return
    } // end render
} // end Inpt
export default withTranslation()(Input)
