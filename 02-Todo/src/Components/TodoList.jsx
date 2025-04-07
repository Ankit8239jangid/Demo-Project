import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="w-full max-w-md space-y-3">
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p className="text-center text-gray-500">No todos available</p>
      )}
    </div>
  );
};

export default TodoList;
