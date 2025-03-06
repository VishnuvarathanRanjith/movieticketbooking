import React from 'react';


const sportsData = [
  {
    title: 'Chennaiyin fc 2024/2025',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzMCBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00410843-rsukzyrvfx-portrait.jpg',
    votes: '34.6K Votes',
  },
  {
    title: 'chennaiyin fc vs kerala fc',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzMCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416665-ghtytxfsgl-portrait.jpg',
    rating: '7.7/10',
    votes: '470 Votes',
  },
  {
    title: 'chess-chai connect',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyIEZlYiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358311-lsffrjdjny-portrait.jpg',
    likes: '13.6K Likes',
  },
  {
    title: 'chennaiyin fc vs punjab fc',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNSBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416666-vjfkwrkqwu-portrait.jpg',
    rating: '8.4/10',
   
  },
  {
    title: 'chennaiyin fc vs north fc',
    imgSrc:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAzIE1hcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416667-pgrvjqlbtj-portrait.jpg',
    rating: '8.4/10',
   
  },
 
];
 
export default function SportsCart() {
  return (
 

    <div>
      <div className='recommenedMovies'>Recommended Sports</div>
      <div className='movies'>
        {sportsData.map((sports, index) => (
          <div key={index} className="movie-card">
            <img src={sports.imgSrc} alt={sports.title} className="movie-image" />
            <div className="movie-info">
              { <h4>{sports.title}</h4>/*
              <p>{movie.rating || movie.likes}</p>
              <p>{movie.votes}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
}