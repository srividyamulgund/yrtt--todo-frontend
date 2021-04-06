/* eslint-disable react/react-in-jsx-scope */
import './Header.css';
import AddTask from '../AddTask/AddTask';

function Header({ taskCount, addTask }) {
    return (
        <header className="header">
            <h1 className="heading">To Do!</h1>
            <AddTask addTask={addTask} />
            <p className="outstanding-tasks">You have {taskCount} tasks to complete</p>
        </header>
    );
}

export default Header;
