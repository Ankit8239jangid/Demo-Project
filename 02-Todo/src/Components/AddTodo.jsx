import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/store';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText(''); 
    }
  };  

  return (
    <div className="flex justify-center items-center w-full max-w-md mx-auto mb-6">
      <div className="flex w-full bg-zinc-100 p-4 rounded-lg shadow-md transition-all hover:shadow-lg">
        <input
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
