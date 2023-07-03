import React, { Component } from "react";
import todoapiService from "../../service/todoapiService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withRouter } from "react-router-dom";
import Main from "../todocalendar/main";

class TodoCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "",
      content: "",
      validationErrors: {},
      spinnerData: false,
      multipleRequest: false,
      isCheck: false,
    };

    this.onChangeInputValue = this.onChangeInputValue.bind(this);
    this.todoCreateAdd = this.todoCreateAdd.bind(this);
    this.onDateChange = this.onDateChange.bind(this); 
    
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
  async todoCreateAdd(event) {
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

      const response = await todoapiService.todoServiceCreate(toDoDto);

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
    } = this.state;
    const { header: headerError, content: contentError } = validationErrors;

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
                  name="header"
                  value={header}
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
                  value={content}
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
                onClick={this.todoCreateAdd}
                disabled={spinnerData}
              >
                ADD TASK
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

export default withRouter(TodoCreate);
