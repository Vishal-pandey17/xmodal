import React, { useState } from "react";
import './index.css'
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  })
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const validateForm = () => {
  if (!formData.username) {
    alert("Please fill out the username field.");
    return false;
  }
  if (!formData.email.includes("@")) {
    alert("Invalid email. Please check your email address.");
    return false;
  }

  if (!/^[0-9]{10}$/.test(formData.phone)) {
    alert("Invalid phone number. Please enter a 10-digit phone number.");
    return false;
  }
    const dobDate = new Date(formData.dob);
    const today = new Date();
  if (dobDate > today) {
    alert("Invalid Date of Birth. Date of birth cannot be in future.");
    return false;
  }
  return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormData({ username: "", email: "", phone: "", dob: "" });
      closeModal();
    }
  };

  return (
    <div>
      <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
         <h1>User Details Modal</h1>
         <button onClick={openModal}>Open Form</button>
      </div>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <h2>Fill the Form</h2>
              <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input id="username" value={formData.username} onChange={handleChange} required />

                <label>Email:</label>
                <input id="email" type="email" value={formData.email} onChange={handleChange} required />

                <label>Phone Number:</label>
                <input id="phone" type="text" value={formData.phone} onChange={handleChange} required />

                <label>Date of Birth:</label>
                <input id="dob" type="date" value={formData.dob} onChange={handleChange} required />

                <button type="submit" className="submit-button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
 