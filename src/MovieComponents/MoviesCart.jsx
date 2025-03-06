
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const movieData = [
  {
    title: 'Game Changer',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICAzNC42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311772-rnlqghebfk-portrait.jpg',
    bigSrc:"https://imagesvs.oneindia.com/webp/img/2025/01/game-changer-review-01-1736447481.jpg",
    rating: '7.4/10',
    votes: '34.6K Votes',
    language:'Tamil,Telugu,Kanada,Hindi,Malayalam',
    genre:"Political,Action,Drama,Emotion"
  },
  {
    title: 'Vidaamuyarchi',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjI1LjdLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408788-guzcerjhur-portrait.jpg',
    bigSrc:'https://i0.wp.com/moviegalleri.net/wp-content/uploads/2024/07/Ajith-Kumar-Vidaa-Muyarchi-Movie-2nd-Look-Wallpapers-HD-rotated.jpg',
    votes: '470 Votes',
    language:'Tamil,Telugu,Kanada,Hindi,Malayalam',
    genre:'Action,Adventure,Thriller'
  },
  {
    title: 'Madhagaja Raja',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTMuNksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00014665-jnstpavubm-portrait.jpg',
    bigSrc:'https://i.ytimg.com/vi/001wvcrom7A/maxresdefault.jpg',
    likes: '13.6K Likes',
    language:'Tamil,Telugu,Kanada,Hindi,Malayalam',
    genre:'Action,Comedy,Family',
  },
  {
    title: 'Mufasa',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA2My4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396541-epynyumney-portrait.jpg',
    bigSrc:'https://assets-in.bmscdn.com/discovery-catalog/events/et00396541-qzvcwpzgbd-landscape.jpg',
    rating: '8.4/10',
    votes: '63.2K Votes',
    language:'Tamil,Telugu,Kanada,Hindi,Malayalam,English',
    genre:'Drama,Animation,Adventure',
  },
  {
    title: 'Kudumbasthan',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICAxNS4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00429890-fbsfjxclww-portrait.jpg',
    bigSrc:'https://media.assettype.com/cinemaexpress%2F2025-01-14%2F1jqddzlv%2FKudumbasthan.jpg',
    rating: '6.5/10',
    votes: '55 Votes',
    language:'Tamil,Telugu,Kanada',
    genre:'Drama,Comedy,Family,Emotion',
  },
  {
    title: 'Thandel',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTcxLjJLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384012-lkcnqrjgfl-portrait.jpg',
    bigSrc:'',
    rating: '8.4/10',
    votes: '63.2K Votes',
    language:'',
    genre:'',
  },
  {
    title: 'Padmaavat',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA0MC44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00046516-beefuwgmfd-portrait.jpg',
    bigSrc:'',
    rating: '8.4/10',
    votes: '63.2K Votes',
    language:'',
    genre:'',
  },
  {
    title: 'Badass Ravikumar',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzguN0sgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00343879-ktzwxxlmas-portrait.jpg',
    bigSrc:'',
    rating: '8.4/10',
    votes: '63.2K Votes',
    language:'',
    genre:'',
  },
  {
    title: 'Deva',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny41LzEwICAxMC42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00374104-qgsmfbnanb-portrait.jpg',
    bigSrc:'',
    rating: '8.4/10',
    votes: '63.2K Votes',
    language:'',
    genre:'',
  },
  {
    title: 'Sky Force',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA0M0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00371539-yqjkjctnet-portrait.jpg',
    bigSrc:'',
    rating: '8.4/10',
    votes: '63.2K Votes',
    language:'',
    genre:'',
  },
  {
    title: 'ponman',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA2LjRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00430150-rhsjclqytu-portrait.jpg',
    bigSrc:'',
    rating: '8.4/10',
    votes: '63.2K Votes',
    language:'',
    genre:'',
  },
  {
    title: 'Interstellar',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS41LzEwICAxMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00019066-utvnglbsyz-portrait.jpg',
    bigSrc:'',
    rating: '8.4/10',
    votes: '63.2K Votes',
    language:'',
    genre:'',
  },
  {
    title: 'Top Gun',
    imgSrc: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICA1N0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00076943-wpfutydpnc-portrait.jpg',
    bigSrc:'',
    rating: '8.4/10',
    votes: '63.2K Votes',
    language:'',
    genre:'',
  },

];

export default function MoviesCart() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (movie) => {
    navigate('/MovieDetails', { state: { movie } });
  };

  const goToNext = () => {
    if (currentIndex + 5 < movieData.length) {
      setCurrentIndex(currentIndex + 5);
    }
  };

  const goToPrevious = () => {
    if (currentIndex - 5 >= 0) {
      setCurrentIndex(currentIndex - 5);
    }
  };

  return (
    <>
    <div>
      <div className="recommenedMovies">Recommended Movies</div>
      <div className="movies-container">
        {/* Conditionally Render Previous Button */}
        {currentIndex > 0 && (
          <div className="arrow left" onClick={goToPrevious}>
            <FaArrowLeft size={25} color="#fff" />
          </div>
        )}

        <div className="movies">
          {movieData.slice(currentIndex, currentIndex + 5).map((movie, index) => (
            <div key={index} className="movie-card">
              <img
                src={movie.imgSrc}
                alt={movie.title}
                className="movie-image"
                onClick={() => handleClick(movie)}
              />
            </div>
          ))}
        </div>

        {/* Conditionally Render Next Button */}
        {currentIndex + 5 < movieData.length && (
          <div className="arrow right" onClick={goToNext}>
            <FaArrowRight size={25} color="#fff" />
          </div>
        )}
      </div>
    </div>
   
    </>
  );
}
