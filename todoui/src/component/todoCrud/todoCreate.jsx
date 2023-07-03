import React, { Component } from "react";
import todoapiService from "../../service/todoapiService";

class TodoCreate extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      header: null,
      content: null,
      toDoDto: {},
      isRead: false,
      spinnerData: false,
      multipleRequest: false,
      validationErrors: {}
    };

    // Bind event handler functions to the component instance
    this.onChangeInputValue = this.onChangeInputValue.bind(this);
    this.todoCreateAdd = this.todoCreateAdd.bind(this);
  }

  onChangeInputValue(event) {
    const { name, value } = event.target;
    const backendHandleError = { ...this.state.validationErrors };
    backendHandleError[name] = undefined;
    this.setState({
      [name]: value,
      backendHandleError
    });
  }

  async todoCreateAdd(event) {
    event.preventDefault();

    const { header, content } = this.state;
    const toDoDto = {
      header,
      content
    };

    try {
      this.setState({
        spinnerData: true,
        multipleRequest: false
      });

      const response = await todoapiService.todoServiceCreate(toDoDto);

      if (response.status === 200) {
        this.setState({
          multipleRequest: true
        });
        this.props.history.push("/todo/list");
      }
    } catch (err) {
      console.error(err);
      this.setState({ spinnerData: true });
      const backendError = err.response.data.validationErrors;
      if (backendError) {
        this.setState({
          validationErrors: backendError
        });
        console.log(backendError);
      }
      this.setState({ spinnerData: false, multipleRequest: false });
    }
  }

  render() {
    const { validationErrors, isRead, spinnerData, multipleRequest } =
      this.state;
    const { header, content } = validationErrors;

    const addButton = (
      <div
        className="btn btn-primary btn-block mb-4"
        onClick={this.todoCreateAdd}
        disabled={!isRead || spinnerData}
      >
        ADD TASK
        {spinnerData && (
          <span className="spinner-border spinner-border-sm" role="status"></span>
        )}
      </div>
      
    );


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
                  value={this.state.header || ""}
                  onChange={this.onChangeInputValue}
                  placeholder="Enter a new task"
                />
                {header && <span className="error">{header}</span>}
              </div>
              <div>
                <label htmlFor="content">Content:</label>
                <input
                  type="text"
                  id="content"
                  name="content"
                  value={this.state.content || ""}
                  onChange={this.onChangeInputValue}
                  placeholder="Enter content"
                />
                {content && <span className="error">{content}</span>}
              </div>
              <button>{addButton}</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TodoCreate;
