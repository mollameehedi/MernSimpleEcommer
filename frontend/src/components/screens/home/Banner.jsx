import React, { useState } from 'react';
import Slider from "react-slick";
import bannerImg from "../../../assets/Banner.jpg";
import Image from '../../common/utils/Image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const [slide, setSlide] = useState(0);
    let banners = [
        {
            image:bannerImg
        },
        {
            image:bannerImg
        },
        {
            image:bannerImg
        },
        {
            image:bannerImg
        },
        {
            image:bannerImg
        }
    ]
    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prev, next) => {
            setSlide(next);
          },
          appendDots: (dots) => (
            <div
              style={{
                transform: "translateY(-50px)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === slide
                  ? {
                      width: "12px",
                      height: "12px",
                      borderRadius: "100%",
                      backgroundColor: "black",
                      border: "2px solid white",
                    }
                  : {
                      width: "12px",
                      height: "12px",
                      borderRadius: "100%",
                      backgroundColor: "black",
                    }
              }
            >
            </div>
          ),
      
          responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              },
            },
          ],
      };
      return (
       <div className="w-full">
        {banners.length > 2?(
            <Slider {...settings}>
            {banners.map((banner,index) => (
                <Image className="w-full" src={banner.image} key={index}/>
            ))}
        </Slider>
        ):(
            <Image className="w-full" src={banners[0].image}/>
        )}
       </div>
      );
}

export default Banner