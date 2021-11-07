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
        }}
      >
        <SplideSlide>
          <div className="testimonal-card">Hello</div>{' '}
        </SplideSlide>
        <SplideSlide>
          <div className="testimonal-card">fello</div>{' '}
        </SplideSlide>
        <SplideSlide>
          <div className="testimonal-card">delo</div>{' '}
        </SplideSlide>
        <SplideSlide>
          <div className="testimonal-card">sello</div>{' '}
        </SplideSlide>
        <SplideSlide>
          <div className="testimonal-card">sello</div>{' '}
        </SplideSlide>
      </Splide>
    </div>
  );
}
