import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Components/redux/store.js';
import TodoList from './Components/TodoList.jsx';
import AddTodo from './Components/AddTodo.jsx';



const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-zinc-300 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold pt-5 mb-6">Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
