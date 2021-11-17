import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Testimonal() {
  const [grad, setvalue] = useState("");
  function gradinrt() {
    var hexValues = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
    ];

    function populate(a) {
      for (var i = 0; i < 6; i++) {
        var x = Math.round(Math.random() * 14);
        var y = hexValues[x];
        a += y;
      }
      return a;
    }

    var newColor1 = populate("#");
    var newColor2 = populate("#");
    var angle = Math.round(Math.random() * 360);

    var gradient =
      "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
    return gradient;
  }
  // const gradients = {
  //   backgroundImage: grad,
  // };
  // console.log(gradients);

  return (
    <div className="relative">
      <h2 className="py-5 text-4xl text-center mont"> Testimonal </h2>

      <Splide
        className="relative py-10 sp"
        options={{
          type: "loop",
          perPage: 2,
          autoplay: true,
          rewind: true,
          padding: "2rem",
          gap: "2rem",
          interval: 100,
          speed: 20000,
          rewind: true,
          arrows: false,
          pagination: false,
          breakpoints: {
            640: {
              perPage: 1,
            },
            810: {
              perPage: 2,
            },
          },
        }}
      >
        <SplideSlide>
          <div className="relative w-full my-3 bg-white shadow-lg testimonal-card right">
            <div className="p-6 content">
              <svg
                width="45"
                height="36"
                class="mb-5 fill-current text-yellow-500"
              >
                <path style={{fill:"#255957"}} d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
              </svg>
            </div>
            <div className="min-h-full name rounded-b-xl">
              <div
                className="min-h-full p-5 name rounded-b-xl"
                style={{ backgroundImage: gradinrt() }}
              >
                <div className="flex space-x-5">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                    alt=""
                    srcset=""
                  />
                  <p>Deepak kumar</p>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </SplideSlide>
        <SplideSlide>
          <div className="relative w-full bg-white shadow-lg testimonal-card left rounded-xl">
            <div className="p-6 content">
              <svg
                width="45"
                height="36"
                class="mb-5 fill-current text-yellow-500"
              >
                <path style={{fill:"#255957"}} d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
              </svg>
            </div>
            <div className="min-h-full name">
              <div
                className="min-h-full p-5 name rounded-b-xl"
                style={{ backgroundImage: gradinrt() }}
              >
                <div className="flex space-x-5">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                    alt=""
                    srcset=""
                  />
                  <p>Deepak kumar</p>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </SplideSlide>
        <SplideSlide>
          <div className="relative w-full bg-white shadow-lg testimonal-card right rounded-xl">
            <div className="p-6 content">
              <svg
                width="45"
                height="36"
                class="mb-5 fill-current text-yellow-500"
              >
                <path style={{fill:"#255957"}}  d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
              </svg>
            </div>
            <div className="min-h-full name">
              <div
                className="min-h-full p-5 name rounded-b-xl"
                style={{ backgroundImage: gradinrt() }}
              >
                <div className="flex space-x-5">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                    alt=""
                    srcset=""
                  />
                  <p>Deepak kumar</p>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </SplideSlide>
        <SplideSlide>
          <div className="relative w-full bg-white shadow-lg testimonal-card left rounded-xl">
            <div className="p-6 content">
              <svg
                width="45"
                height="36"
                class="mb-5 fill-current text-yellow-500"
              >
                <path style={{fill:"#255957"}} d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
              </svg>
            </div>
            <div className="min-h-full name rounded-xl">
              <div
                className="min-h-full p-5 name rounded-b-xl"
                style={{ backgroundImage: gradinrt() }}
              >
                <div className="flex space-x-5">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                    alt=""
                    srcset=""
                  />
                  <p>Deepak kumar</p>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </SplideSlide>
      </Splide>
      
      </div>
  );
}
