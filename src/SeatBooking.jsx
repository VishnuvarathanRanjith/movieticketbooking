import React, { useState } from "react";
import { useLocation ,useNavigate} from "react-router-dom";
import "./SeatBooking.css";

const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
const seatsPerRow = 20;
const soldSeats = [
  "C1", "C2", "D9", "D10", "H17", "H18", "I21", "I22", "K24", "K25",
];

const SeatBooking = () => {

  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const location = useLocation();
 
  const handleSeatClick = (seatId) => {
    if (soldSeats.includes(seatId)) return;
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((s) => s !== seatId) : [...prev, seatId]
    );
  };

  
  const { date, movie, time, selectedTheater, selectedCity } = location.state || {};

  const handleBookTickets = () => { 
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat before booking!");
      return;
    }
  
    navigate("/BookTickets", {
      state: {
        date, 
        movie,
        time,
        selectedTheater,
        selectedCity,
        selectedSeats,
      },
    });
  };
  return (
      <>
      <h2 className="movie-title">{movie}</h2>
      <p className="cinema-details">{selectedTheater}, {selectedCity} | Today,{date} </p>

      <p className="ticketprice"><strong>Ticket Price:</strong> ₹150</p>

       <div className="showtimes">
       
            <button  className={`showtime-btn`}>
            {time}
          </button>
     
      </div> 

      <div className="seat-grid">
        {rows.map((row) => (
          <div key={row} className="seat-row">
            <span className="row-label">{row}</span>
            {Array.from({ length: seatsPerRow }, (_, i) => i + 1).map((seatNum) => {
              const seatId = `${row}${seatNum}`;
              return (
                <div
                  key={seatId}
                  className={`seat ${soldSeats.includes(seatId) ? "sold" : ""} ${
                    selectedSeats.includes(seatId) ? "selected" : ""
                  }`}
                  onClick={() => handleSeatClick(seatId)}
                >
                  {seatNum}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="legend">
        <div><span className="legend-box available"></span> Available</div>
        <div><span className="legend-box selected"></span> Selected</div>
        <div><span className="legend-box sold"></span> Sold</div>
      </div>

      <button className="book-btn" onClick={handleBookTickets}>Book {selectedSeats.length} Tickets</button>
      </>
  );
};

export default SeatBooking;
