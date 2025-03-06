import { useLocation, useNavigate } from "react-router-dom";
import "./BookTickets.css";
import axios from "axios";

const ticketPrice = 150; 

export default function BookTickets({setBookingHistory}) {
  const location = useLocation();
  const navigate = useNavigate();

 

  const { date, movie, time, selectedTheater, selectedCity, selectedSeats } = location.state || {};

  if (!selectedSeats || selectedSeats.length === 0) {
    return <h2>No seats selected. Please go back and choose your seats.</h2>;
  }

  const totalAmount = selectedSeats.length * ticketPrice;


  const addtocart = async (item) => {
    try {
      const user=JSON.parse(localStorage.getItem("user"));
      const response = await axios.post("http://localhost:5000/addbookings",{item,_id:user._id});
      // console.log(response.data);
      alert(`Payment Successful! 🎟️ Your ${selectedSeats.length}tickets are booked`);
      setBookingHistory(response.data.user.booking);
      navigate("/history");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="book-tickets-container">
      <h2>Confirm Your Booking</h2>
      <p><strong>Movie:</strong> {movie}</p>
      <p><strong>Theater:</strong> {selectedTheater}, {selectedCity}</p>
      <p><strong>Show Time:</strong> {time}</p>
      <p><strong>Seats:</strong> {selectedSeats.join(", ")}</p>
      <p><strong>Total Amount:</strong> ₹{totalAmount}</p>

      <h3>Select Payment Method</h3>
      <div className="payment-methods">
        <label><input type="radio" name="payment" defaultChecked/> Credit/Debit Card</label>
        <label><input type="radio" name="payment" /> UPI</label>
        <label><input type="radio" name="payment" /> Net Banking</label>
      </div>

      <button
        className="confirm-btn"
        onClick={() =>
          addtocart({
            date,
            movie,
            theater: `${selectedTheater}, ${selectedCity}`,
            time,
            seats: selectedSeats,
            amount: totalAmount,
          })
        }
      >
        Pay ₹{totalAmount}
      </button>
      
      <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};
