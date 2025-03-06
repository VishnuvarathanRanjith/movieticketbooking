import React from 'react';

const eventData = [
  {
    title: 'porikki pasanga',
    imgSrc: 'https://www.chennaitop10.com/wp-content/uploads/2025/01/media-desktop-porikki-pasanga-a-tamil-standup-comedy-show-0-2025-1-4-t-7-35-23.jpg',
    rating: '7.4/10',
    votes: '34.6K Votes',
  },
  {
    title: 'madras comedy show',
    imgSrc: 'https://cdn-az.allevents.in/events10/banners/497eacf0-c92b-11ef-bc0b-e72b021fe194-rimg-w1200-h600-dc493178-gmir.jpg?v=1735837322',
    rating: '7.7/10',
    votes: '470 Votes',
  },
  {
    title: 'Toxic',
    imgSrc: 'https://briomatic.com/wp-content/uploads/2024/12/Abhishek-Upmanyu-Live-2025-Chennai.webp',
    likes: '13.6K Likes',
  },
  {
    title: 'Yaaruda ivanga',
    imgSrc: 'https://www.chennaitop10.com/wp-content/uploads/2025/01/media-desktop-yaruda-ivanunga-tamil-comedy-show-0-2025-1-8-t-4-37-48.jpg',
    rating: '8.4/10',
   
  },
 
];

export default function LaughterTherapyCart() {
  return (
    <div>
      <div className='RecommendedEvents'>Laughter Therapies</div>
      <div className='events'>
        {eventData.map((events, index) => (
          <div key={index} className="event-card">
            <img src={events.imgSrc} alt={events.title} className="event-image" />
            <div className="event-info">
              { <h4>{events.title}</h4>/*
              <p>{movie.rating || movie.likes}</p>
              <p>{movie.votes}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
