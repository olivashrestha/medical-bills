import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Summary from './Summary';
import {BsJournalMedical} from 'react-icons/bs';


const Home = ({ records, setRecords }) => {
  return (
  
    <div class="home">
      <h2>Medical Bill History</h2>
    
      <ul>
        {records.map((record) => (
          <div className='entry'>
          <h4> <BsJournalMedical className='icon'/> </h4>
          <li key={record.id}>
            <h3>Record belongs to: {record.patientName}</h3>
            
             <p> <Link className="summary-link" to={`/summary/${record.id}`}>View full Summary</Link></p>
            
            
          </li>
          </div>
        ))}
      </ul>
    </div>

  );
};

export default Home;
