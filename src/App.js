import React, { useReducer } from 'react';
import './App.css';
import TabsComponent from './components/TabsComponent';
import TodoList from './components/TodoList';


function App() {
  return (
    <div>
      <TabsComponent/>
      <TodoList/>
    </div>
  )
}


export default App;
