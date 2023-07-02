//there will be calender 
//When we press each date from the calendar, the task window will open for us.
//In the task module that opens, there will be a place where we can execute crud operations.
//We can use createTask, updateTask, listTask, and deleteTask
//There will be list of done and waiting tasks
//There will be all daled tasks and all done tasks
//There will be dark mode
//There will be different themes for calendar
import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TodoTable from "./TodoTable";

function Main() {
  const [date, setDate] = useState(new Date());
  const [showTodoTable, setShowTodoTable] = useState(false);

  const handleDateChange = (date) => {
    setDate(date);
    setShowTodoTable(true);
  };

  return (
    <>
      <div className="main">
        <h1 className="header">TO DO CALENDAR</h1>
        <div className="calendar-container">
          <Calendar onChange={handleDateChange} value={date} />
        </div>
        {showTodoTable && (
          <div className="text-center">
            <TodoTable date={date}/>
          </div>
        )}
      </div>
    </>
  );
}

export default Main;

