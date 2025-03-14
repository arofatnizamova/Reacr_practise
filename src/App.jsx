import { useState } from 'react';
import './App.css';

function ToDoList() {
  const [tasks, setTasks] = useState([
    'Write code', 
    'Draw cubes', 
    'Go to the gym'
  ]);
  const [task, setTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <>
      <div>
        <input 
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text" 
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add task</button>
      </div>

      <div className="App">
        <h1>Today's tasks</h1>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
