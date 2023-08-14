// import React from 'react';

// const BookingFormComponent = ({ animalName }) => {
//   return (
//     <div className="booking-form-container">
//       {/* Your booking form component content */}
//       <h2>Booking Form for {animalName}</h2>
//       {/* ... rest of your form elements ... */}
//     </div>
//   );
// };

// export default BookingFormComponent;
import React, { useState } from 'react';

const BookingFormComponent = ({ animalName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    date: '',
    price: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);

    // Simulate a successful booking (replace with your actual booking logic)
    // For example, you can make an API call here
    // Once the booking is successful, display the alert
    alert('Booked successfully!');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Booking Form for {animalName}</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingFormComponent;
