
// import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap/dist/js/bootstrap.bundle.min';

import React  from "react";
import { useNavigate } from 'react-router-dom';

const eventData = [
  {
    title: 'Chennai ReadyaH',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMiBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00424133-cywggumtnj-portrait.jpg',
    rating: '7.4/10',
    votes: '34.6K Votes',
    genre:'Western, classical, and folk dance',
    bigSrc:'https://storage.googleapis.com/ticket9-prod.appspot.com/images/1735207429258/prabhu%20deva%27s%20vibe%20live%20-%20in%20dance%20concert%20/prabhu%20deva%27s%20vibe%20live%20-%20in%20dance%20concert%20_bannerimage_image_1.webp?GoogleAccessId=firebase-adminsdk-e1h5l%40ticket9-prod.iam.gserviceaccount.com&Expires=4102444800&Signature=fRt7qx8saMlsi%2BBYkOfhK950FWWM%2FIzHjO4fMt87axWpp%2BiiNA9vlB9n2E5i8vSqhEDFjs6evX%2BrTFgxHjtnXAzBTRSZoocY4yhYkJuv43mbXK2uGrfHUVbxhtP%2Bl2i20KX3rfsqECdWnhQd4R9LsqbUNJwszfkj4GuKi%2FcS7UPd3QXoHmID9MDjGGCy%2FNN8d%2B2ni4o8vqff5EfnURSPTLenyTHAd8UXh33LnHizb%2B2TLTS3CewH%2BcuvGf%2BnCaygpdUAfIFNT1rLdlrkXXgy11XLHV3I4RtA4XIa2z%2BCXrk4Y%2FuoHp1KAI4lmTW9BKpBVKgoG2PKuGe3H7JC8TiC9g%3D%3D',
  },
  {
    title: 'K.S Chitra live',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA4IEZlYg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00427647-jpsxrflhjw-portrait.jpg',
    rating: '7.7/10',
    votes: '470 Votes',
    language:'Tamil',
    genre:'Melody,Classical,Devotional',
    bigSrc:'https://assets-in.bmscdn.com/discovery-catalog/events/et00427647-hkcnlrgncl-landscape.jpg',
  },
  {
    title: 'vineeths live',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA4IE1hcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00422106-tqdtxcnqlh-portrait.jpg',
   bigSrc:'https://www.dazzlerr.com/wp-content/uploads/2024/12/Vineeth-Sreenivasan-live-in-Concert-Bengaluru.jpg',
    likes: '13.6K Likes',
    language:'Tamil',
    genre:'Regional,Malayalam,Carnatic',


  },
  {
    title: 'Vikkals of Vikram',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMiBKdW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00404482-ervxuhhqay-portrait.jpg',
    bigSrc:'https://assets-in.bmscdn.com/discovery-catalog/events/et00404482-gdvkmtmhfm-landscape.jpg',
    rating: '8.4/10',
    language:'Tamil',
    genre:'Comedy,Entertainment,Stress Buster',
   
  },
  {
    title:'Shreya Live',
    imgSrc:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNSBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00424806-kxendgzyja-portrait.jpg',
    bigSrc:'https://assets-in.bmscdn.com/discovery-catalog/events/et00424806-xxdwbdwpjm-landscape.jpg',
    rating:'7.8k',
    language:'Tamil',
    genre:'classical, romantic ballads, and pop',
  }
 
];

export default function EventCart() {
  const navigate = useNavigate(); // Hook for navigation
  
    const handleClick = (events) => {
      navigate('/MovieDetails', { state: { events } }); // Passing movie data as state
    };
  return (
    <div>
      <div className='RecommendedEvents'>Recommended Events</div>
      <div className='events'>
        {eventData.map((events, index) => (
          <div key={index} className="event-card">
          
            <img src={events.imgSrc} alt={events.title} className="event-image" onClick={()=>
         handleClick(events)
          }/>
            <div className="event-info">
              {/*
              <p>{movie.rating || movie.likes}</p>
              <p>{movie.votes}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
