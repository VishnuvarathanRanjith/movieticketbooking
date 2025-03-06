import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomeComponents/Home';
import MovieHouse from './MovieComponents/MovieHouse';
import EventCart from './EventComponents/EventCart';
import SportsCart from './EventComponents/SportsCart';
import MovieDetails from './MovieDetails';
import Booking from './Booking';
import SeatBooking from './SeatBooking';
import BookTickets from './BookTickets';
import History from './History';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgetPassword';
import { useState } from 'react';

export default function App() {
    const [bookingHistory, setBookingHistory] = useState([]);
  
  return (
    <div>
      <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Movies' element={<MovieHouse/>}/>
          <Route path='/Events' element={<EventCart/>} /> 
          <Route path='/Sports' element={<SportsCart/>}/>
          <Route path="/MovieDetails" element={<MovieDetails/>} />
          <Route path='/Booking' element={<Booking/>} />
          <Route path='/SeatBooking' element={<SeatBooking/>} />
          <Route path='/BookTickets' element={<BookTickets  setBookingHistory={setBookingHistory}/>} />
          <Route path='/History' element={<History setBookingHistory={setBookingHistory} bookingHistory={bookingHistory}/>} />
          <Route path='/Login' element={<Login   setBookingHistory={setBookingHistory}/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}
