import { useState } from 'react';
import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import Search from './Search';
import Footer from './Footer';
 function Home() {
  const navigate=useNavigate();
  const setShowLogin=()=>{
    navigate('/Login');
  }
   const [showSearch,setSearch]=useState(false);
   return (
     <div className='Homies'>
       <div className="logo">Show Time</div>
       <input type="text" placeholder="Search Movie" className="search-container" onClick={()=>setSearch(true)}/>

       {/* Button to trigger login popup */}
       <button className="btn" onClick={ setShowLogin}>Sign In</button>
 
       <div className="navbar">
         <div className="nav-links">
           <a href="/">Home</a>
           <a href="/Movies">Movies</a>
           <a href="/Events">Events</a>
           <a href="/Sports">Sports</a>
 
         </div>
       </div>
      
      {showSearch && <Search onClose={()=>setSearch(false)}/>}
        
 </div>
 )}
export default function MovieDetails() {
  const navigate = useNavigate(); // Hook for navigation
  
  const location = useLocation();
  const { movie, events } = location.state || {}; 

  // Merge movie and event data
  const data = movie || events; 
  const handleClick = (data) => {
    navigate('/Booking', { state: data.title }); // Replace "Coimbatore" with dynamic city selection
  };
  

  if (!data) {
    <Home/>
    return <h2>No movie or event details available</h2>; 
  }

  return (
    <>
    <Home/>
    <div className='MovieDetaisContainer'>
      <div className='blur'></div>

      <img src={data.imgSrc} alt={data.title} className='smallImg' />

      <div className='bookings'>
        <h1 className='movietitle'>{data.title}</h1>
        <p className='language'>{data.language}</p>
        <p className='genre'>{data.genre}</p>
        <p className='votes'>Votes: {data.votes || data.rating || data.likes}</p>
        <button className='booktickets' onClick={()=>handleClick(data)}>Book Tickets</button>
      </div>

      <div className='backImgContainer'>
        <img src={data.bigSrc} alt={data.title} className='backImg' />
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}
