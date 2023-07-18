import React, { useState } from "react";
import todoapiService from "../../service/todoapiService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withRouter } from "react-router-dom";

const TodoCreate = (props) => {
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [validationErrors, setValidationErrors] = useState({});
  const [spinnerData, setSpinnerData] = useState(false);
  const [multipleRequest, setMultipleRequest] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const onChangeInputValue = (event) => {
    const { name, value } = event.target;
    const backendHandleError = { ...validationErrors };
    backendHandleError[name] = undefined;
    setValidationErrors(backendHandleError);

    if (name === "header") {
      setHeader(value);
    } else if (name === "content") {
      setContent(value);
    }
  };

  const todoCreateAdd = async (event) => {
    event.preventDefault();

    const toDoDto = {
      header,
      content,
      selectedDate,
    };

    try {
      setSpinnerData(true);
      setMultipleRequest(false);

      const response = await todoapiService.todoServiceCreate(toDoDto);

      if (response.status === 200) {
        setMultipleRequest(true);
        props.history.push("/todo/list");
      }
    } catch (err) {
      console.error(err);
      setSpinnerData(true);
      const backendError = err.response && err.response.data.validationErrors;
      if (backendError) {
        setValidationErrors(backendError);
        console.log(backendError);
      }
      setSpinnerData(false);
      setMultipleRequest(false);
    }
  };

  const onDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

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
                onChange={onChangeInputValue}
                placeholder="Enter a new task"
              />
              {validationErrors.header && (
                <span className="error">{validationErrors.header}</span>
              )}
            </div>
            <div>
              <label htmlFor="content">Content:</label>
              <input
                type="text"
                id="content"
                name="content"
                value={content}
                onChange={onChangeInputValue}
                placeholder="Enter content"
              />
              {validationErrors.content && (
                <span className="error">{validationErrors.content}</span>
              )}
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <DatePicker
                id="date"
                name="date"
                selected={selectedDate}
                onChange={onDateChange}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <button
              className="btn btn-primary btn-block mb-4"
              onClick={todoCreateAdd}
              disabled={spinnerData}
            >
              ADD TASK
              {spinnerData && (
                <span className="spinner-border spinner-border-sm" role="status"></span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(TodoCreate);
