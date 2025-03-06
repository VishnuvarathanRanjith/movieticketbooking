import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Search.css';
import { movieData, eventData } from './Dataset';

export default function Search({ onClose }) {
  const [searchTerm, setSearchTerm] = useState(""); // Track the search input
  const [results, setResults] = useState([]); // Store filtered results
  const navigate = useNavigate(); // Initialize the navigate hook

  // Use effect to initially load all movie and event names
  useEffect(() => {
    setResults([...movieData, ...eventData]);
  }, []);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term === "") {
      setResults([...movieData, ...eventData]);
    } else {
      const filteredMovies = movieData.filter((movie) =>
        movie.title.toLowerCase().includes(term.toLowerCase())
      );
      const filteredEvents = eventData.filter((event) =>
        event.title.toLowerCase().includes(term.toLowerCase())
      );
      setResults([...filteredMovies, ...filteredEvents]);
    }
  };

  // Function to handle click on movie or event
  const handleItemClick = (item) => {
    
    navigate('/MovieDetails', {
      state: { movie: item }, // Pass the movie or event data to the MovieDetails component
    });
  };

  return (
    <>
      <div className="overlay-search">
        <input
          type="text"
          placeholder="Search for movies, events, and sports"
          className="search-container2"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        {/* Display search results */}
        <div className="search-results">
          {results.length > 0 ? (
            results.map((item, index) => (
              <div
                key={index}
                className="search-item"
                onClick={() => handleItemClick(item)}
                 // Navigate and pass the data on click
              >
                <p>{item.title}</p> {/* Display the title */}
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </>
  );
}
