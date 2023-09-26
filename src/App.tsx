import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Todo />
      </div>
    </div>
  );
}

export default App;
