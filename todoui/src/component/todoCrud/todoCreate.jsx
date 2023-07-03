import React, { Component } from "react";
import todoapiService from "../../service/todoapiService";
import { withRouter } from "react-router-dom";

class TodoCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "",
      content: "",
      validationErrors: {},
      spinnerData: false,
      multipleRequest: false,
    };

    this.onChangeInputValue = this.onChangeInputValue.bind(this);
    this.todoCreateAdd = this.todoCreateAdd.bind(this);
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

  async todoCreateAdd(event) {
    event.preventDefault();

    const { header, content } = this.state;
    const toDoDto = {
      header,
      content,
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
