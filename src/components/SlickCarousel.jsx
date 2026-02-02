import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { list } from "../data";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map((photo) => {
          const { id, image, text } = photo;
          return (
            <article key={id}>
              <img className="rounded-lg shadow-md" src={image} alt={text} />
              <p className="py-3">{text}</p>
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
