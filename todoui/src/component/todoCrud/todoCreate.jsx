import React, { Component } from "react";
//import TodoTable from '../todocalendar/TodoTable';

class TodoCreate extends Component {


    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>
                <div className="todo-create">
                    <h2>TASK CREATE</h2>
                    <div className="todo-table">                  
                        <div className="form">
                            <div>
                                <label htmlFor="todo">Header:</label>
                                <input
                                    type="text"
                                    id="todo"
                                    name="todo"                        
                                    placeholder="Enter a new task"
                                />
                            </div>
                            <div>
                                <label htmlFor="content">Content:</label>
                                <input
                                    type="text"
                                    id="content"
                                    name="content"
                                    placeholder="Enter content"
                                />
                            </div>
                            <button >Add Todo</button>
                        </div>

                    </div>
                </div>
                {/* <TodoTable/> */}
            </>
            
        )
    }

}
export default TodoCreate;