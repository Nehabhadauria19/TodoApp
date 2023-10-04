import React, { useState } from 'react';
import "../App.css";

const TodoInput = () => {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [taskIdToEdit, setTaskIdToEdit] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      return; // Don't add empty tasks
    }
    if (editMode) {
      // Edit existing task
      const updatedTaskList = [...taskList];
      updatedTaskList[taskIdToEdit] = newTask;
      setTaskList(updatedTaskList);
      setEditMode(false);
    } else {
      // Add a new task
      setTaskList([...taskList, newTask]);
    }
    setNewTask("");
    setTaskIdToEdit(null);
  };

  const handleDeleteTask = (id) => {
    const updatedTaskList = taskList.filter((_, index) => index !== id);
    setTaskList(updatedTaskList);
  };

  const handleEditTask = (id) => {
    setNewTask(taskList[id]);
    setEditMode(true);
    setTaskIdToEdit(id);
  };

  return (
    <form className='main-container' onSubmit={handleAddTask}>
      <h3 className='head'>ToDoiee App</h3>
      {editMode ? (
        <input
          className='inputs'
          type="text"
          placeholder='Edit your task'
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
      ) : (
        <input
          className='inputs'
          type="text"
          placeholder='Add your task'
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
      )}
      {editMode ? (
        <button className='upd' onClick={handleAddTask}>Update</button>
      ) : (
        <button className='btn'>ADD</button>
      )}
      <br />
      <ol>
        {taskList.map((task, index) => (
          <li className='list' key={index}>
            {task}
            <span className='edit' onClick={() => handleEditTask(index)}>Edit</span>
            <span className='delete' onClick={() => handleDeleteTask(index)}>Delete</span>
          </li>
        ))}
      </ol>
    </form>
  );
};

export default TodoInput;
