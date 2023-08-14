// import React, { useEffect, useState } from 'react';
// import './App.css';
// import BookingFormComponent from './BookingFormComponent'; // Import the BookingFormComponent

// const AnimalCard = () => {
//   const [animals, setAnimals] = useState([]);
//   const [selectedAnimal, setSelectedAnimal] = useState(null); // Track the selected animal

//   useEffect(() => {
//     // Fetch data from local API
//     fetch('http://localhost:7000/animals')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setAnimals(data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const handleBooking = (animalName) => {
//     setSelectedAnimal(animalName); // Set the selected animal
//   };

//   // If selectedAnimal is not null, render the BookingFormComponent
//   if (selectedAnimal) {
//     return <BookingFormComponent animalName={selectedAnimal} />;
//   }

//   return (
//     <div className="animal-card">
//       <h1 className="animal-card-title">Animal Booking App</h1>
//       <div className="animal-list">
//         {animals.map((animal, index) => (
//           <div key={index} className="animal-item">
//             <img src={animal.image} alt={animal.name} className="animal-image" />
//             <h2 className="animal-name">{animal.name}</h2>
//             <p className="animal-description">{animal.description}</p>
//             <p className="animal-price">Price: ${animal.price}</p>
//             <button onClick={() => handleBooking(animal.name)} className="book-now-button">Book Now</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AnimalCard;

// import React, { useEffect, useState } from 'react';
// import './App.css';
// import BookingForm from './BookingForm'; // Import the BookingForm component

// const AnimalCard = () => {
//   const [animals, setAnimals] = useState([]);
//   const [selectedAnimal, setSelectedAnimal] = useState(null); // Track the selected animal for booking

//   useEffect(() => {
//     // Fetch data from local API
//     fetch('http://localhost:7000/animals')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setAnimals(data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const handleBooking = (animal) => {
//     setSelectedAnimal(animal); // Set the selected animal for booking
//   };

//   const handleFormClose = () => {
//     setSelectedAnimal(null); // Close the booking form
//   };

//   return (
//     <div className="animal-card">
//       <h1 className="animal-card-title">Animal Booking App</h1>
//       <div className="animal-list">
//         {animals.map((animal, index) => (
//           <div key={index} className="animal-item">
//             <img src={animal.image} alt={animal.name} className="animal-image" />
//             <h2 className="animal-name">{animal.name}</h2>
//             <p className="animal-description">{animal.description}</p>
//             <p className="animal-price">Price: ${animal.price}</p>
//             <button onClick={() => handleBooking(animal)} className="book-now-button">Book Now</button>
//           </div>
//         ))}
//       </div>
//       {selectedAnimal && <BookingForm animal={selectedAnimal} onClose={handleFormClose} />}
//     </div>
//   );
// };

// export default AnimalCard;


import React, { useEffect, useState } from 'react';
import './App.css';
import BookingForm from './BookingForm';

const AnimalCard = () => {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    // Fetch data from local API
    fetch('https://ontrack-server.onrender.com/animals')
      .then(response => response.json())
      .then(data => {
        setAnimals(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleBooking = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleFormClose = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="animal-card">
      <h1 className="animal-card-title">Animal Booking App</h1>
      <div className="animal-list">
        {animals.map((animal, index) => (
          <div key={index} className="animal-item">
            <img src={animal.image} alt={animal.name} className="animal-image" />
            <h2 className="animal-name">{animal.name}</h2>
            <p className="animal-description">{animal.description}</p>
            <p className="animal-price">Price: ${animal.price}</p>
            <button onClick={() => handleBooking(animal)} className="book-now-button">Book Now</button>
            {selectedAnimal === animal && <BookingForm animal={selectedAnimal} onClose={handleFormClose} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalCard;


