import React from 'react';

const Modal = ({isOpen, onAdd, onClose, newTask, setNewTask}) => {
    if (isOpen) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                    <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Add your task here"
                        className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                        onKeyDown={(e) => e.key === 'Enter' && onAdd()}
                    />
                    <div className="flex justify-end space-x-2">
                        <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">Cancel</button>
                        <button onClick={onAdd} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Add</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Modal;
