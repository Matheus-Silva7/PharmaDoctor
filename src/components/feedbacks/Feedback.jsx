
import React from 'react';
import "./Feedback.css";
import TitleSection from '../Reutilizable/TitleSection';
import { userData } from '../../data/userData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardFeedback from './CardFeedback';
import Slider from 'react-slick';
import { SampleNextArrow, SamplePrevArrow } from './ArrowSlick';

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true, 
  autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id='feedbacks' className='feedback-content'>
      <TitleSection title={"FEEDBACK"} />
      <h2>Feedbacks about our service from the bottom of heart</h2>
      <div className="container-caroucel">
        <Slider {...settings}>
          {userData.map((user, index) => (
            <CardFeedback key={index} name={user.name} image={user.image} review={user.review} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Feedback;