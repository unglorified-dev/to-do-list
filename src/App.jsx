import React, { useState, useEffect } from 'react';
import TaskItem from './Components/TaskItem';
import Modal from './Components/Modal';

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTask, setNewTask] = useState('');

    // Load tasks from localStorage when the app starts
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    // Save tasks to localStorage whenever they change
    useEffect(() => {
        if (tasks.length) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([
                ...tasks,
                {
                    id: Date.now().toString(),
                    text: newTask,
                    completed: false,
                },
            ]);
            setNewTask('');
            setIsModalOpen(false);
        }
    };

    const toggleTask = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">To-do List</h1>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                onClick={() => setIsModalOpen(true)}
            >
                + Add Task
            </button>
            <div className="mt-6 w-full max-w-md space-y-4">
                {tasks.length === 0 ? (
                    <p className="text-gray-500 text-center">No tasks yet, add one to get started!</p>
                ) : (
                    tasks.map((task) => (
                        <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
                    ))
                )}
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} newTask={newTask} onAdd={addTask} setNewTask={setNewTask} />
            <footer className="text-center mt-6 p-4 bg-gray-800 text-white rounded-lg shadow-lg absolute bottom-0 w-full" >
                Made in a learning experience by <a href="" className="text-blue-400 hover:text-blue-300 underline">Jayesh Toshniwal</a>
            </footer>
        </div> 
    );
}
