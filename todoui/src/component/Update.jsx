import React, { Component } from 'react'

import TodoApiServices from '../service/todoapiService';

import Input from './Input';

// i18n 
import { withTranslation } from 'react-i18next';


class Update extends Component {

    static displayName = "Todo_Update";

    constructor(props) {
        super(props);

        this.state = {
            //id: this.props.todo.id,
            todo: null,
            id: this.props.match.params.id,
            completed: this.props.match.params.completed
        }

        this.onChangeInputValue = this.onChangeInputValue.bind(this);
    }

    componentDidMount() {
        TodoApiServices.todoServiceFindById(this.state.id).then((response) => {
            const findTodoData = response.data;
            console.log(findTodoData)
            this.setState({
                todo: findTodoData.todo,
                completed: findTodoData.completed
            })
        }).catch(err => {
            console.log(err)
        })
    }

    // END OF UPDATE RETURN MAIN PAGE http://localhost:3000/
    view() {
        this.props.history.push(`/`);
    }

    // ONCHANGE 
    onChangeInputValue = (event) => {

        this.setState({
            todo: event.target.value,
        })
    } // end onChangeInputValue


    // UPDATE
    todoUpdateSubmit = async (event) => {

        event.preventDefault();


        const { todo, id, completed } = this.state;


        const todoDto = {
            todo, id, completed
        }

        TodoApiServices.todoServiceUpdateById(id, todoDto).then(
            (response) => {
                if (response.status === 200) {
                    this.view()
                    window.location.reload(true);

                }
            }
        ).catch((err) => console.error(err))

    }

    render() {
        const { t } = this.props;
        return (
                /* SHAPE OF UPDATE PAGE TAGS */ 
                <div className="container">
                    <div className="row">
                        <h3 className='text-center'>{t('update_page')}</h3>
                        <div className="col-8 offset-2 border pt-3 pb-3">
                            {/* UPDATE INPUT */}
                            <Input
                                onChangeInputValue={this.onChangeInputValue}
                                todoCreateSubmit={this.todoUpdateSubmit}
                            />
                        </div>
                    </div>
                </div>
        ) //end return
    } // end render
} // end Update
export default withTranslation()(Update)
