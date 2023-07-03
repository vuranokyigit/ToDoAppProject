import React, { useState } from "react";

import todoapiService from "../../service/todoapiService";
import { useEffect } from "react";

function TodoList() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        todoapiService.todoServiceList()
            .then((response) => {
                setTodoList(response.data);
            })
            .catch((error) => {
                console.error("List failed", error);
            });
    }, []);

    //console.log(todoList.push()="/todo/create");
    const create = () => {
        // create 
        window.location.href = "/#/todo/create";
    };
    const update = (id) => {
        //update
        todoList.push("/todo/update/" + id);
    };
   
    const del = (id) => {
        // delete
        todoapiService.todoServiceDeleteById(id)
            .then((response) => {
                const updatedList = todoList.filter(todo => todo.id !== id);
                setTodoList(updatedList);
            })
            .catch((error) => {
                console.error("Delete failed", error);
            });
    };

    return (
        <>
            <h1 className="text-center text-primary display-5 text-uppercase">TO DO TASKs</h1>
            {/* CREATE TASK */}
            <button
                className="btn btn-primary"
                onClick={create}
                style={{ marginRight: "2rem" }}><i className="fa-solid fa-circle-plus me-3"> ADD task</i></button>
            {/* ALL DELETE TASK */}
            <button
                className="btn btn-danger"
                onClick={del}
            ><i className="fa-solid fa-bomb">  ALL tasks delete</i></button>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>HEADER</th>
                        <th>CONTENT</th>
                        <th>DATE</th>
                        <th>UPDATE</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        todoList.map((todo) =>
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.header}</td>
                                <td>{todo.content}</td>
                                <td>{todo.systemDate}</td>
                                <td><i className="fa-solid fa-pen-to-square text-primary"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => update(todo.id)} ></i></td>
                                
                                <td><i className="fa-solid fa-trash text-danger"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                        if (window.confirm(todo.id + "id  Sure deleted ?"))
                                            del(todo.id)
                                        else
                                            window.alert("Not Deleted !!!");
                                    } //end function
                                    }></i></td>
                            </tr>

                        )//end mapping
                    }

                </tbody>
            </table>
        </>
    )
}


export default TodoList;