import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import Summary from './Summary';
import './App.css';
import {FaFileMedical} from 'react-icons/fa';

const App = () => {
  const [records, setRecords] = useState([]);

  const handleSubmit = (formData) => {
    const newRecord = { ...formData, id: new Date().getTime().toString() };
    setRecords([...records,newRecord]);
 // Do something with the form data, like sending it to a server
 console.log(formData);
 // Reset the form
 
};

  return (
    <Router>
      
      <div class>
      <div class="App-header">
        <nav class="logo-nav">
          <div className='mainicon'><FaFileMedical/></div>

          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/form">Add new record</Link>
            </li>
            
          </ul>
        </nav>

        </div>
        <Routes>
          <Route path="/home" element={<Home records={records} setRecords={setRecords} />} />
          <Route path="/form" element={<Form onSubmit={handleSubmit} />} />
          <Route path="/summary/:id" element={<Summary records={records} setRecords={setRecords} />} />
        </Routes>
       
     
      </div>
    </Router>
  );
};

export default App;
