// import React, { useState, useEffect } from "react";
import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios"; 
import "./History.css"; 
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();

const[bookingHistory,setBookingHistory]=useState([]);

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"));
    if(user){
      setBookingHistory(user.booking);
    }
      },[]);

  const clearhistory = async () => {
    try {
      await axios.delete("http://localhost:5000/clearhistory"); 
      setBookingHistory([]); 
    } catch (error) {
      console.error(" Error clearing history:", error);
    }
  };


  return (
    <div className="history-container">
      <h2 className="BookingHistory">Booking History</h2>
      {bookingHistory.length === 0 ? (
        <p className="empty-message">No past bookings found.</p>
      ) : (
        <ul className="History-list">
          {bookingHistory.map((booking, index) => {
            const bookingDetails = `Date: ${booking.date}, Movie: ${booking.movie}, Theater: ${booking.theater}, Show Time: ${booking.time}, Seats: ${booking.seats.join(", ")}, Amount: ₹${booking.amount}`;

            return (
              <li key={index} className="history-item">
                <div className="booking-info">
                  <strong>Date:</strong> {booking.date} <br />
                  <strong>Movie:</strong> {booking.movie} <br />
                  <strong>Theater:</strong> {booking.theater} <br />
                  <strong>Show Time:</strong> {booking.time} <br />
                  <strong>Seats:</strong> {booking.seats.join(", ")} <br />
                  <strong>Total Amount:</strong> ₹{booking.amount} <br />
                </div>
                <div className="qr-code">
                  <QRCodeCanvas value={bookingDetails} size={100} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <button className="backtohome" onClick={() => navigate("/")}>Back To Home</button>
      <button className="clearhistory" onClick={clearhistory}>Clear History</button>
    </div>
  );
};

export default History;
