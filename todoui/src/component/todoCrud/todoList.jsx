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
    const create = () => {
        // create 
        window.location.href = "/#/todo/create";
    };
    //Update by id
    const update = (id) => { 
        window.location.href ="/#/todo/update/" + id;
    }    
    //DELETE BY ID
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
    //DELETE ALL
    const deleteAll = () => {
        todoapiService
          .todoServiceDeleteAll()
          .then((response) => {
            setTodoList([]);
          })
          .catch((error) => {
            console.error("Delete all failed", error);
          });
      };
      //CHECK BOX 
    const [options ,setOptions] = useState(true);
    const checkboxChange = (id) => {
        setOptions(!options);
        if (options === true) {
          // Checkbox is checked, üstü çizili stili uygula
          const updatedTodoList = todoList.map((todo) =>
            todo.id === id ? { ...todo, isChecked: true } : todo
          );
          setTodoList(updatedTodoList);
          console.log(updatedTodoList);
        } else {
          // Checkbox is unchecked, üstü çizili stili kaldır
          const updatedTodoList = todoList.map((todo) =>
            todo.id === id ? { ...todo, isChecked: false } : todo
          );
          setTodoList(updatedTodoList);
          console.log(updatedTodoList);
        }
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
                onClick={() => {
                    if (window.confirm("Do you want to delete all ?"))
                        deleteAll()
                        
                    else
                        window.alert("Not Deleted ");
                }
             } //end function
            ><i className="fa-solid fa-bomb">  ALL tasks delete</i></button>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>HEADER</th>
                        <th>CONTENT</th>
                        <th>DATE</th>
                        <th>CHECKBOX</th>
                        <th>UPDATE</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //reusibility check koy
                        todoList.map((todo) =>
                            <tr key={todo.id}
                            style={todo.isChecked ? {textDecoration : "line-through"}: null}>
                                <td>{todo.id}</td>
                                <td>{todo.header}</td>
                                <td>{todo.content}</td>
                                <td>{todo.systemDate}</td>
                                <td><input
                                    value={todo.isChecked}
                                    type="checkbox"
                                    style={{ width: "20px", height: "20px" }}
                                    onChange={() => checkboxChange(todo.id)}></input></td>
                                <td><i className="fa-solid fa-pen-to-square text-primary"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => update(todo.id)} ></i></td>                     
                                <td><i className="fa-solid fa-trash text-danger"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                        if (window.confirm("Do you want to delete as id: "+ todo.id + " ?"))
                                            del(todo.id)                                         
                                        else
                                            window.alert("Not Deleted  id: "+ todo.id);
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