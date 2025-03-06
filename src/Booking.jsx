import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Booking.css";

const theatresData = {
  Chennai: [
    { name: "Rohini", movies: ["Vidaamuyarchi", "Game Changer", "Mufasa","Kudumbasthan"] },
    { name: "Kamala", movies: ["Vidaamuyarchi", "Game Changer", "Ghilli"] },
    { name: "IMAX", movies: ["Vidaamuyarchi", "Game Changer", "Captain America: Brave Soldier"] },
  ],
  Coimbatore: [
    { name: "KG Cinema", movies: ["Vidaamuyarchi", "Game Changer", "Mufasa"] },
  ],
  Salem: [
    { name: "Anandha Cinema", movies: ["Vidaamuyarchi", "Caption America Brave World", "Game Changer"] }
  ]
};

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDates, setSelectedDates] = useState({});
  const [selectedCity, setSelectedCity] = useState("");
  const selectedMovie = location.state;
  

  const cities = Object.keys(theatresData);

  const availableTheaters = selectedCity
    ? theatresData[selectedCity].filter(theater => theater.movies.includes(selectedMovie)).map(theater => ({ ...theater, city: selectedCity }))
    : [];

  const handleDateChange = (movie, theaterName, event) => {
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [`${movie}-${theaterName}`]: event.target.value, 
    }));
  };


  const handleShowtimeClick = (theater, time) => {
    const selectedDate = selectedDates[`${selectedMovie}-${theater.name}`]; // Use correct key format
    if (!selectedDate) {
      alert("Please select a date before proceeding!");
      return;
    }
  
    navigate("/SeatBooking", {
      state: { date: selectedDate, movie: selectedMovie, time, selectedTheater: theater.name, selectedCity: theater.city },
    });
  };

  return (
    <div className="booking-container">
      <div className="theater-info">
        <h1 className="theatreshowing">Theaters Showing "{selectedMovie}"</h1>
        <select onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}>
          <option value="">Select a City</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div className="movie-list">
        {availableTheaters.length === 0 ? (
          <h2>please selected the city</h2>
        ) : (
          availableTheaters.map((theater, index) => (
            <div key={index} className="movie">
              <h3>{theater.name} - {theater.city}</h3>
              <div className="show-time">
                <input
                  type="date"
                  className="calendar"
                  value={selectedDates[`${selectedMovie}-${theater.name}`] || ""}
                  onChange={(e) => handleDateChange(selectedMovie, theater.name, e)}
                />
              </div>
              <div className="showtimes">
                {["09:00 AM", "12:15 PM", "03:35 PM", "06:55 PM", "10:15 PM"].map((time, i) => (
                  <span key={i} className="showtime" onClick={() => handleShowtimeClick(theater, time)}>
                    {time}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="footer">
        <p>Show Time © in February 2025</p>
      </div>
    </div>
  );
};

export default Booking;
