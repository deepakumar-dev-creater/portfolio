import React from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
export default function Testimonal () {
  return (
    <div>
      <h2 className="py-5 text-4xl text-center mont"> Testimonal </h2>

      <Splide
        className="p-5"
        options={{
          type    : 'loop',
          perPage : 3,
          autoplay: true,
          padding: '2rem',
          gap:"2rem",
          speed : 50000,
          rewind:true,
          interval:2000,
          arrows:false,
          pagination:false,
          breakpoints: {
            640: {
              perPage: 1,
            },
            810:{
              perPage:2,
            }
          }
        }}
      >
        <SplideSlide>
          <div className="w-full testimonal-card">Hello</div>{' '}
        </SplideSlide>
        <SplideSlide>
          <div className="w-full testimonal-card">fello</div>{' '}
        </SplideSlide>
        <SplideSlide>
          <div className="w-full testimonal-card">delo</div>{' '}
        </SplideSlide>
        <SplideSlide>
          <div className="w-full testimonal-card">sello</div>{' '}
        </SplideSlide>
        <SplideSlide>
          <div className="w-full testimonal-card">sello</div>{' '}
        </SplideSlide>
      </Splide>
    </div>
  );
}
