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
                <h1 className="text-center text-primary display-5 text-uppercase"><i class="fa-solid fa-circle-plus me-3"></i>create</h1>
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
                        <tr>
                            <td>1</td>
                            <td>HEADER-1</td>
                            <td>CONTENT-1</td>
                            <td>DATE-1</td>
                            <td><i class="fa-solid fa-pen-to-square text-primary"></i></td>
                            <td><i class="fa-solid fa-binoculars text-dark"></i></td>
                            <td><i class="fa-solid fa-trash text-danger me-3"></i></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }


export default TodoList;