import React, { Component } from 'react';
import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My Todos</h1>
        <Todo text='Learn React'/>
        <Todo text= 'Master React'/>
        <Todo text='Explore full course'/>
        
      </div>
    );
  }
}

export default App;
