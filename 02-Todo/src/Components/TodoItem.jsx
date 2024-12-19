import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from './redux/store';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim()) {
      dispatch(editTodo({ ...todo, text: newText }));
      setIsEditing(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-lg transition-all hover:shadow-xl space-y-3 md:space-y-0 md:space-x-4">
      {/* Todo Text or Input */}
      <div className="flex-1">
        {isEditing ? (
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span
            className={`text-lg font-medium cursor-pointer transition-all ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
              }`}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </span>
        )}
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-3 mt-3 md:mt-0">

        {/* Toggle Switch Button */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
            className="hidden"  // Hide the default checkbox
          />
          <span
            className={`w-14 h-8  rounded-full ${todo.completed ? 'bg-blue-600' : 'bg-gray-400'} transition-colors`}
          />
          <span
            className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-all ${todo.completed ? 'transform translate-x-6' : ''}`}
          />
        </label>


        {/* Save/Edit Button */}
        {isEditing ? (
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}

        {/* Delete Button */}
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>

      </div>
    </div>
  );
};

export default TodoItem;
