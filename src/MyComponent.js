import React, { useState } from 'react';

function ToDoList() {

  const [task, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState('');

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }

  function addTask() {
    if (newTasks.trim() !== "") {
      setTasks([...task, newTasks.trim()]);
      setNewTasks("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className='to-do-list'>
      <h1>To-Do-List</h1>
      <div>
        <input
          type='text'
          placeholder='Enter a task....'
          value={newTasks}
          onChange={handleInputChange}
        />
        <button
          className='add-button'
          onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {task.map((task, index) =>
          <li key={index}>
            <span className='text'>{task}</span>
            <button
              className='delete-button'
              onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button
              className='move-button'
              onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button
              className='move-button'
              onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        )}
      </ol>
    </div>
  );
}

export default ToDoList;
