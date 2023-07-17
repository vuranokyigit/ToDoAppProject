import React, { Component } from "react";
import todoapiService from "../../service/todoapiService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withRouter } from "react-router-dom";


class TodoUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "",
            content: "",
            validationErrors: {},
            spinnerData: false,
            multipleRequest: false,
            isCheck: false,
            id: this.props.match.params.id,
        };
        this.onChangeInputValue = this.onChangeInputValue.bind(this);
        this.todoUpdate = this.todoUpdate.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }
    //cdm-first find data
    componentDidMount() {
        const id = this.props.match.params.id; // Alınan ID'yi kullanarak doğru kaynağı bulmak için
        todoapiService.todoServiceFindById(id)
          .then((response) => {
            const findTodoData = response.data;     
            this.setState({
              header: findTodoData.header,
              content: findTodoData.content,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    onChangeInputValue(event) {
        const { name, value } = event.target;
        const backendHandleError = { ...this.state.validationErrors };
        backendHandleError[name] = undefined;
        this.setState({
            [name]: value,
            validationErrors: backendHandleError,
        });
    }
    onDateChange(date) {
        this.setState({ date: date });
    }
    //ADD TO DO
    async todoUpdate(event) {
        event.preventDefault();//does not work browser

        const { header, content, date } = this.state;
        const toDoDto = {
            header,
            content,
            date,
        };
        try {
            this.setState({
                spinnerData: true,
                multipleRequest: false,
            });
            const response = await todoapiService.todoServiceUpdateById(this.state.id, toDoDto);

            if (response.status === 200) {
                this.setState({
                    multipleRequest: true,
                });
                this.props.history.push("/todo/list");
            }
        } catch (err) {
            console.error(err);
            this.setState({ spinnerData: true });
            const backendError = err.response && err.response.data.validationErrors;
            if (backendError) {
                this.setState({
                    validationErrors: backendError,
                });
                console.log(backendError);
            }
            this.setState({ spinnerData: false, multipleRequest: false });
        }
    }
    render() {
        const {
            header,
            content,
            date,
            validationErrors,
            spinnerData,
            multipleRequest,
            id,
        } = this.state;
        const { header: headerError, content: contentError } = validationErrors;
        return (
            <>
                <div className="todo-create">
                    <h2>TASK UPDATE</h2>
                    <div className="todo-table">
                        <div className="form">
                            <h3 className="display-3">{id}</h3>
                            <div>
                                <label htmlFor="todo">Header:</label>
                                <input
                                    type="text"
                                    id="todo"
                                    name="header"
                                    value={this.state.header}
                                    onChange={this.onChangeInputValue}
                                    placeholder="Enter a new task"
                                />
                                {headerError && <span className="error">{headerError}</span>}
                            </div>
                            <div>
                                <label htmlFor="content">Content:</label>
                                <input
                                    type="text"
                                    id="content"
                                    name="content"
                                    value={this.state.content}
                                    onChange={this.onChangeInputValue}
                                    placeholder="Enter content"
                                />
                                {contentError && <span className="error">{contentError}</span>}
                            </div>
                            <div>
                                <label htmlFor="date">Date:</label>
                                <DatePicker // Tarih seçici bileşeni
                                    id="date"
                                    name="date"
                                    selected={date} // Seçilen tarihi durumdan al
                                    onChange={this.onDateChange} // Tarih değişikliği işleyicisi
                                />
                            </div>
                            <button
                                className="btn btn-primary btn-block mb-4"
                                onClick={this.todoUpdate}
                                disabled={spinnerData}
                            >
                                UPDATE TASK
                                {spinnerData && (
                                    <span
                                        className="spinner-border spinner-border-sm"
                                        role="status"
                                    ></span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default withRouter(TodoUpdate);
