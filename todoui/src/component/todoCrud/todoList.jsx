import React, { Component, useState } from "react";

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


    return (
        <>
            <h1 className="text-center text-primary display-5 text-uppercase">TO DO TASKs</h1>
            {/* CREATE TASK */}
            <button className="btn btn-primary" style={{marginRight:"2rem"}}><i class="fa-solid fa-circle-plus me-3"> ADD task</i></button>
            {/* ALL DELETE TASK */}
            <button className="btn btn-danger"><i class="fa-solid fa-bomb">  ALL tasks delete</i></button>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>HEADER</th>
                        <th>CONTENT</th>
                        <th>DATE</th>
                        <th>UPDATE</th>
                        <th>VIEW</th>
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
                                <td><i class="fa-solid fa-pen-to-square text-primary"></i></td>
                                <td><i class="fa-solid fa-binoculars text-dark"></i></td>
                                <td><i class="fa-solid fa-trash text-danger me-3"></i></td>
                            </tr>

                        )//end mapping
                    }

                </tbody>
            </table>
        </>
    )
}


export default TodoList;