import React from 'react'

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="w-5 h-5 accent-blue-500"
            />
            <span className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>{task.text}</span>
        </div>
        <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded transition-colors"
        >
            Delete
        </button>
    </div>
);
};


export default TaskItem