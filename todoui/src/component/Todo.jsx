import React, { Component } from 'react'

export default class Todo extends Component {

    static displayName = "Todo";

    // CONSTRUCTOR
    constructor(props) {
        super(props);
    }


    render() {
        const {todo} = this.props;
        return (
            <>
                <div className="input-group mb-3 mt-2">
                    {
                        todo.completed
                            ?
                            /* TODO INPUT IF COMPLETED */ 
                            <label
                                type="text"
                                className="form-control todo-label"
                                id={"isdone" + todo.id}
                                style={{ textDecoration: "line-through", color: "red" }}
                            >
                                {todo.todo}
                            </label>
                            
                            :
                            /* TODO INPUT IF  NOT COMPLETED */ 
                            <label
                                type="text"
                                className="form-control todo-label"
                                id={"isdone" + todo.id}

                            >
                                {todo.todo}
                            </label>
                    }
                    <div className="input-group-text todo-edit">
                        {/* TODO CHECK BOX */}
                        <input
                            className="form-check-input mt-0"
                            type="checkbox"
                            defaultValue=""
                            id={todo.id}
                            name="isdone"
                            onChange={this.props.onChangeIsDone}
                            defaultChecked={todo.completed ? true : false}
                        />
                        {/* TODO UPDETE BUTTON */}
                        <a onClick={() => this.props.update(todo.id)}>
                            <i className="fa-solid fa-pen-to-square fa-lg text-warning " />
                        </a>
                        {/* TODO DELETE BUTTON */}
                        <a onClick={() => this.props.todoDeleteSubmit(todo.id)}>
                            <i className="fa-solid fa-trash fa-lg text-danger" />
                        </a>
                    </div>
                </div>
            </>
        ) // return end
    } // render end
} // Todo end
