import React from 'react'
import TodoList from './components/TodoList';
import Add from './components/Add';
import Product from './components/product';

function App(){
  return <div className='main'>
    <TodoList/>
    <Add/>
    <Product/>
  </div>
}


export default App;


