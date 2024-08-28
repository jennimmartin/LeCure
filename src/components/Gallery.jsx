import SectionTitle from "./SectionTitle";
import SlickCarousel from "./SlickCarousel";

const Gallery = () => {
  return (
    <section className="py-20 align-element" id="gallery">
      <SectionTitle text="gallery" />
      <SlickCarousel />
    </section>
  );
};

export default Gallery;
