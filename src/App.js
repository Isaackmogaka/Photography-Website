
import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
// import './App.css';
import AnimalCard from './AnimalCard';
import BookingForm from './BookingForm';

const App = () => {
  return (
    <div className="App">
      <AnimalCard/>
      {/* <BookingForm/> */}
      <NavBar />
    </div>
  );
};


export default App;
