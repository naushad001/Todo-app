import React from 'react'
import Todolist from './Components/Todolist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import "./App.css";

function App() {
    return (
        <div className='App'>
           <Nav/>
           <Todolist/>
        </div>
    )
}

export default App;