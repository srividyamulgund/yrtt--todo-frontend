/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList/TaskList';
import Task from './components/Task/Task';
import Header from './components/Header/Header';

function App() {
  const [tasks, setTasks] = useState(
    [{ text: "Buy cat food", completed: false, date: "2019-09-18", id: "001" },
    { text: "Wash dishes", completed: true, date: "2019-09-24", id: "002" },
    { text: "Make oat milk", completed: false, date: "2019-09-27", id: "003" },
    { text: "Buy dog food", completed: false, date: "2019-09-18", id: "004" },
    { text: "Hang the clothes", completed: true, date: "2019-09-24", id: "005" },
    { text: "Buy milk and yogurt", completed: false, date: "2019-09-27", id: "006" }
    ]);

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  const addTask = text => {
    const newTask = {
      text: text,
      completed: false,
      date: '2021-04-06',
      id: '007'
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

  }

  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="App">
      <Header taskCount={incompleteTasks.length} addTask={addTask} />
      <main className="all-tasks">
        <TaskList deleteTask={deleteTask} tasks={incompleteTasks} status={"incomplete"} />
        <TaskList deleteTask={deleteTask} tasks={completedTasks} status={"complete"} />
      </main>
    </div>
  );
}

export default App;
