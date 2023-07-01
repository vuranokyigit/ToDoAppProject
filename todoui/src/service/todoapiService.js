// axios
import axios from "axios"

// PERSISTE URL
const TODO_URL = "/todos"

// CLASS
class TodoApiServices {
    // CREATE
    // localhost:2222/todos/create
    todoServiceCreate(todoDto) {
        return axios.post(TODO_URL + "/create", todoDto);
    }

    // LIST
    // localhost:2222/todos/list
    todoServiceList() {
        return axios.get(TODO_URL+"/list");
    }

    // FIND
    // localhost:2222/todos/find/1
    todoServiceFindById(id) {
        return axios.get(`${TODO_URL}/find/${id}`);
    }

    // DELETE
    // localhost:2222/todos/delete/1
    todoServiceDeleteById(id) {
        return axios.delete(`${TODO_URL}/delete/${id}`);
    }
    // DELETE ALL
    // localhost:2222/todos/all/delete
    todoServiceDeleteAll() {
        return axios.get(`${TODO_URL}/all/delete`);
    }

    // UPDATE
    // localhost:2222/todos/update/1
    todoServiceUpdateById(id,todoDto) {
        return axios.put(`${TODO_URL}/update/${id}`, todoDto);
    }

}

export default new TodoApiServices();