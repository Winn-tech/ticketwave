import React, { Component, useState } from "react";
import Image from '../images/profile-pic.jpg'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";

function CenterMode() {
    const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 4000,
    arrows: false,
    dots: true,
    afterChange: (current) => setActiveSlide(current),
  };
  const Array = [1, 2, 3, 4, 5]
  return (
    <div className="slider-container">
      <Slider {...settings}>
      
           {Array.map((single, index)=>{
            return(
                <div className="div">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="152" height="24" viewBox="0 0 152 24" fill="none">
                  <path d="M12 18L4.94658 21.7082L6.29366 13.8541L0.587322 8.2918L8.47329 7.1459L12 0L15.5267 7.1459L23.4127 8.2918L17.7063 13.8541L19.0534 21.7082L12 18Z" fill="#F6D021"/>
                  <path d="M44 18L36.9466 21.7082L38.2937 13.8541L32.5873 8.2918L40.4733 7.1459L44 0L47.5267 7.1459L55.4127 8.2918L49.7063 13.8541L51.0534 21.7082L44 18Z" fill="#F6D021"/>
                  <path d="M76 18L68.9466 21.7082L70.2937 13.8541L64.5873 8.2918L72.4733 7.1459L76 0L79.5267 7.1459L87.4127 8.2918L81.7063 13.8541L83.0534 21.7082L76 18Z" fill="#F6D021"/>
                  <path d="M108 18L100.947 21.7082L102.294 13.8541L96.5873 8.2918L104.473 7.1459L108 0L111.527 7.1459L119.413 8.2918L113.706 13.8541L115.053 21.7082L108 18Z" fill="#F6D021"/>
                  <path d="M140 18L132.947 21.7082L134.294 13.8541L128.587 8.2918L136.473 7.1459L140 0L143.527 7.1459L151.413 8.2918L145.706 13.8541L147.053 21.7082L140 18Z" fill="#F6D021"/>
                  </svg>
                </div>
                <div>
                  <p>
                  "Impressed with the range of events available. The booking process was quick and hassle-free. Five stars!"
                  </p>
                </div>
                <div>
                  <div className="testifier">
                    <div>
                      <img src={Image} alt="" />
                    </div>
                    <div >
                      <h4>Bolaji Deeproot</h4>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
                
            </div>
            )
           })}
        
      </Slider>
    </div>
  );
}

export default CenterMode;
