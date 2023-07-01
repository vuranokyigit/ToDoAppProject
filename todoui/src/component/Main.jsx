import React, { Component } from 'react'

import TodoApiServices from '../service/todoapiService';

import Todo from './Todo';
import Input from './Input';

// i18n 
import { withTranslation } from 'react-i18next';

import './todo.css'


class Main extends Component {

    static displayName = "Todo_List";

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            todo: null,
            completed: false,
            viewList: 1,
        }

        // bind
        this.todoCreateSubmit = this.todoCreateSubmit.bind(this);
        this.onChangeInputValue = this.onChangeInputValue.bind(this);

    }

    // CDM (Promise)
    componentDidMount() {
        TodoApiServices.todoServiceList().then(
            (response) => {
                this.setState({
                    todos: response.data
                }); // end setState 
            }
        ).catch((error) => {
            console.error("List Failed: " + error)
        });
    }

    // ONCHANGE 
    onChangeInputValue = (event) => {

        const { todo, completed } = this.state;
        const todoDto = {
            todo,
            completed
        }

        this.setState({
            todo: event.target.value,
        })
    } // end 

    /* ### CRUD FUNCTIONS ### */

    // CREATE
    todoCreateSubmit = async (event) => {

        event.preventDefault();

        const { todo, completed } = this.state;

        const todoDto = {

            todo, completed
        }
        TodoApiServices.todoServiceCreate(todoDto).then(
            (response) => {
                if (response.status === 200) {
                    window.location.reload(true);
                }
            }
        ).catch((err) => console.error(err))
    } //end 

    // UPDATE
    update(id) {
        this.props.history.push("/update/" + id);
        window.location.reload();
    }

    // DELETE
    todoDeleteSubmit(id) {
        TodoApiServices.todoServiceDeleteById(id).then(
            () => {
                this.setState({
                    todos: this.state.todos.filter(
                        todos => todos.id !== id
                    )//end filter
                })// end setState
            }// end response

        ).catch(error => {
            console.error("Todo Delete Failed: " + error)
        })
    }

    // DELETE ALL
    todoDeleteAll() {
        TodoApiServices.todoServiceDeleteAll().then(
            window.location.reload()
        ).catch(error => {
            console.error("Todo Delete Failed: " + error)
        })
    }

    // DELETE ALL DONE 
    todoDeleteDoneAll() {
        this.state.todos.map(
            (todo) => {
                todo.completed ? this.todoDeleteSubmit(todo.id) : console.log("silinmeyenler")
            }
        )
        window.location.reload();
    }


    // INPUT DONE CHECK && UPDATE 
    onChangeIsDone = (event) => {

        const { todos } = this.state;

        todos.map((todo) => {
            if (event.target.id === todo.id) {
                todo.completed = !todo.completed;
                TodoApiServices.todoServiceCreate(todo).then(
                    (response) => {
                        if (response.status === 200) {
                            //console.log(response.data)
                        }
                    }
                ).catch((err) => console.error(err))
            }
        })

        let done = document.getElementById("isdone" + event.target.id);
        done.style.textDecoration = event.target.checked ? "line-through" : "none";
        done.style.color = event.target.checked ? "red" : "black";

    }  //end

    // ALL && TODO && DONE VIEW SELECTION
    doneView(slct) {
        const { viewList } = this.state;
        this.setState({
            viewList: slct
        })
    }


    render() {
        const { t } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <h3 className='text-center'>{t('todo_input')}</h3>
                    <div className="col-8 offset-2 border pt-3 pb-3">
                        {/* NEW INPUT ADD */}
                        <Input
                            onChangeInputValue={this.onChangeInputValue}
                            todoCreateSubmit={this.todoCreateSubmit}
                        />

                        {/* ALL && TODO && DONE VIEW SELECTION */}
                        <div className='list '>
                            <div className='row text-center'>
                                <h3 className='col-12 mt-4'>{t('todo_list_header')}</h3>
                                <div className="col">
                                    <button onClick={() => { this.doneView(1) }} className="btn text-white myButton">{t('all_list')}</button>
                                </div>
                                <div className="col">
                                    <button onClick={() => { this.doneView(2) }} className="btn text-white myButton">{t('done_list')}</button>
                                </div>
                                <div className="col">
                                    <button onClick={() => { this.doneView(3) }} className="btn text-white myButton">{t('todo_list')}</button>
                                </div>
                            </div>
                            <div className='todo mt-5'>
                                {/* TODO LIST by SELECTION */}
                                {
                                    this.state.viewList === 1 ?
                                        this.state.todos.map((todo) =>
                                            <Todo
                                                key={todo.id}
                                                todo={todo}
                                                onChangeIsDone={this.onChangeIsDone}
                                                update={() => { this.update(todo.id) }}
                                                todoDeleteSubmit={() => { this.todoDeleteSubmit(todo.id) }}
                                            />
                                        )
                                        :
                                        this.state.viewList === 2 ?
                                            this.state.todos.filter(
                                                todo => todo.completed === true
                                            ).map((todo) =>

                                                <Todo
                                                    todo={todo}
                                                    onChangeIsDone={this.onChangeIsDone}
                                                    update={() => { this.update(todo.id) }}
                                                    todoDeleteSubmit={() => { this.todoDeleteSubmit(todo.id) }}
                                                />
                                            )
                                            :
                                            this.state.viewList === 3 ?
                                                this.state.todos.filter(
                                                    todo => todo.completed === false
                                                ).map((todo) =>

                                                    <Todo
                                                        todo={todo}
                                                        onChangeIsDone={this.onChangeIsDone}
                                                        update={() => { this.update(todo.id) }}
                                                        todoDeleteSubmit={() => { this.todoDeleteSubmit(todo.id) }}
                                                    />
                                                )
                                                :
                                                <p>{t('unexpected_error')}</p>
                                }
                            </div>
                            {/* DELETE OPERATIONS */}
                            <div className='deletes'>
                                <div className='row'>
                                    <div className="col">
                                        <button onClick={() => { this.todoDeleteDoneAll() }} className="btn text-white">{t('delete_all_done')}</button>
                                    </div>
                                    <div className="col">
                                        <button onClick={() => { this.todoDeleteAll() }} className="btn text-white">{t('delete_all_tasks')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) // end return
    } // end render
} // end Main
export default withTranslation()(Main)