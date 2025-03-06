import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa"; 
import MoviesCart from "../MovieComponents/MoviesCart";
import EventCart from "../EventComponents/EventCart";
import SportsCart from "../EventComponents/SportsCart"; 
import Search from "../Search";
import { useNavigate } from 'react-router-dom';
import Footer from "../Footer";

export default function Home() {
  const navigate = useNavigate();
  const [showSearch, setSearch] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser); 
      setUser(parsedUser.username); 
    }
  }, []);
  

  const handleLogin = () => {
    navigate('/Login');
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); 
    setUser(null);
  };
  

  return (
    <>
      <div className="Homies">
        <div className="logo">Show Time</div>
        <input type="text" placeholder="Search Movie" className="search-container" onClick={() => setSearch(true)} />
        <div className="user-info">
        <FaUserCircle size={30} color="#555" />
          <span>Hi, {user ? user : "Guest"}</span>
          </div>
          {user ? (
            <button className="btn" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="btn" onClick={handleLogin} id="signin">Sign In</button>
          )}
      

        <div className="navbar">
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/Movies">Movies</a>
            <a href="/Events">Events</a>
            <a href="/Sports">Sports</a>
            <a href="/History">View Tickets</a>
          </div>
        </div>
      </div>

      <div>
        <MoviesCart />
        <EventCart />
        <SportsCart />
      </div>

      <div>
        <Footer />
      </div>

      {showSearch && <Search onClose={() => setSearch(false)} />}
    </>
  );
}
