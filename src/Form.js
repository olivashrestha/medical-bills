import React, { useState } from 'react';



const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    address: '',
    hospitalName: '',
    dateOfService: '',
    billAmount: '',
    billImage: null,
  });
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value);
    setFormData({...formData,
      [name]: value,
    });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFormData({...formData,
      billImage: file,
    });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      onSubmit(formData);
      setFormData({
        patientName: '',
        address: '',
        hospitalName: '',
        dateOfService: '',
        billAmount: '',
        billImage: null,
      });
      setErrorMessage('');
    } else {
      setErrorMessage('Please fill in all fields.');
    }
  };

  const isFormValid = () => {
    return (
      formData.patientName &&
      formData.address &&
      formData.hospitalName &&
      formData.dateOfService &&
      formData.billAmount&&
      formData.billImage !== null
    );
  };




    function handleClick() {
      alert('Are you sure?');
    }
  
    

  return (
    <div className="medical-bill-form-container">
    <h2>Medical Bill Form</h2>
    {errorMessage && <div className="error-message"><div class="A">{errorMessage}</div></div>}
    <form onSubmit={handleSubmit}>
      <label>
      <div class="form-lable">Patient Name:<br/></div>
        <input
          type="text"
          name="patientName"
          autoComplete="off"
          value={formData.patientName}
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
          value={formData.address}
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
                      value={formData.hospitalName}
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
                      value={formData.dateOfService}
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
          value={formData.billAmount}
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
      <button onClick={handleClick} >Submit</button>
      </label>
    </form>
    
  </div>
  );
}

export default Form;
