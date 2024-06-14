import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDeleteTask}) {
  // function handleDeleteTask(text) {
  //   setTasks(prevTasks => prevTasks.filter(task => task.text !== text));
  // }
  
  // <Task text="Buy rice" category="Grocery" onDelete={() => handleDeleteTask("Buy rice")} />
  
  
  const taskElements = tasks.map((task, index) => (
    <Task key={index} text={task.text} category={task.category}  onDelete={() => handleDeleteTask(task.text)} />
  ));
  return (
    <div className="tasks">{taskElements}</div>
  );
}

export default TaskList;
