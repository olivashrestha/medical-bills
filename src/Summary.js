import React, { useState } from 'react';
import Form from './Form';
import Home from './Home';
import { useParams } from 'react-router-dom';

const Summary = ({ setRecords, records }) =>{
  const { id } = useParams();
  const record = records.find((record) => record.id === id);

  const [isEditing, setIsEditing] = useState(false);
  const [editedRecord, setEditedRecord] = useState(record);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedRecord({ ...editedRecord, [name]: value });
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setEditedRecord({...editedRecord,
      billImage: file,
    });
  };


  const handleSave = (e) => {
    e.preventDefault();
    const index = records.findIndex((entry) => entry.id === editedRecord.id);
  if (index !== -1) {
    const updatedRecords = [...records];
    updatedRecords[index] = editedRecord;
    setRecords(updatedRecords);
    console.log("Records updated:", updatedRecords);
  } else {
    console.log("Entry not found");
  }

  setIsEditing(false);
};
 
  if (isEditing) {
    return (
      <div className="medical-bill-form-container">
      <h2>Edit form Entry</h2>
      <form >
        <label>
        <div class="form-lable">Patient Name:<br/></div>
          <input
            type="text"
            name="patientName"
            autoComplete="off"
            value={editedRecord.patientName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
        <div class="form-lable">Address:<br/></div>
          <input
            type="text"
            name="address"
            autoComplete="off"
            value={editedRecord.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          <div class="form-lable">Hospital Name:<br/></div>
          <input
            type="text"
            name="hospitalName"
            autoComplete="off"
            value={editedRecord.hospitalName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
        <div class="form-lable"> Date of Service:<br/></div>
          <input
            type="date"
            name="dateOfService"
            autoComplete="off"
            value={editedRecord.dateOfService}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
        <div class="form-lable">Bill Amount:<br/></div>
          <input
            type="number"
            name="billAmount"
            autoComplete="off"
            value={editedRecord.billAmount}
              onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
        <div class="form-lable">Bill Image:<br/></div>
          <input
            type="file"
            name="billImage"
            accept="image/*"
            autoComplete="off"
            onChange={handleFileInputChange}
            
          />
        </label>
        <br />
        <label>
        <button onClick={handleSave}>Save</button>
        </label>
      </form>
      
    </div>
    
    );
  }

  return (
    <div className='summary-display'>
      <h2>Form Entry</h2>
      <ul>
        <li key={record.id}>
          
          <p class="summary-attributes"><span>Patient Name: </span>{record.patientName}</p>
           <p class="summary-attributes"><span>Address: </span>{record.address}</p>
           <p class="summary-attributes"> <span>Hospital name: </span>{record.hospitalName}</p>
           <p class="summary-attributes"><span>Date of Service: </span>{record.dateOfService}</p>
           <p class="summary-attributes"><span>Bill Amount: </span>{record.billAmount}</p>
          {record.billImage && (
            <img src={URL.createObjectURL(record.billImage)} alt="Bill Image" />
          )}
        </li>
      </ul>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Summary;
