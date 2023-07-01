// axios
import axios from "axios"

// PERSISTE URL
const REACT_URL = "/todos"

// CLASS
class TodoApiServices {
    // CREATE
    // localhost:3333/todos/create
    todoServiceCreate(todoDto) {
        return axios.post(REACT_URL + "/create", todoDto);
    }

    // LIST
    // localhost:3333/todos/list
    todoServiceList() {
        return axios.get(REACT_URL+"/list");
    }

    // FIND
    // localhost:3333/todos/find/1
    todoServiceFindById(id) {
        return axios.get(`${REACT_URL}/find/${id}`);
    }

    // DELETE
    // localhost:3333/todos/delete/1
    todoServiceDeleteById(id) {
        return axios.delete(`${REACT_URL}/delete/${id}`);
    }
    // DELETE ALL
    // localhost:3333/todos/all/delete
    todoServiceDeleteAll() {
        return axios.get(`${REACT_URL}/all/delete`);
    }

    // UPDATE
    // localhost:3333/todos/update/1
    todoServiceUpdateById(id,todoDto) {
        return axios.put(`${REACT_URL}/update/${id}`, todoDto);
    }

}

export default new TodoApiServices();