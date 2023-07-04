// axios
import axios from "axios"

// PERSISTE URL
const REACT_URL = "/todo/api/v1"

// CLASS
class TodoApiServices {
    // CREATE
    // localhost:3333/todo/api/v1/create
    todoServiceCreate(todoDto) {
        return axios.post(REACT_URL + "/create", todoDto);
    }

    // LIST
    // localhost:3333/todo/api/v1/list
    todoServiceList() {
        return axios.get(`${REACT_URL}/list`);
    }

    // FIND
    // localhost:3333/todo/api/v1/find/id(0,1,2)
    todoServiceFindById(id) {
        return axios.get(`${REACT_URL}/find/${id}`);
    }

    // DELETE
    // localhost:3333/todo/api/v1/delete/id(0,1,2)
    todoServiceDeleteById(id) {
        return axios.delete(`${REACT_URL}/delete/${id}`);
    }
    // DELETE ALL
    // localhost:3333/todo/api/v1/all/delete
    todoServiceDeleteAll() {
        return axios.get(`${REACT_URL}/all/delete`);
    }

    // UPDATE
    // localhost:3333/todo/api/v1/update/id(0,1,2)
    todoServiceUpdateById(id,todoDto) {
        return axios.put(`${REACT_URL}/update/${id}`, todoDto);
    }
    

}

export default new TodoApiServices();