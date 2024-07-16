import Img1 from "../images/profile.jpg";

const Hero = () => {
  return (
    <>
      <div
        className="bg-gradient-to-r from-pink-300 via-pink-100 to-pink-50 pt-10"
        id="home"
      >
        <div className="align-element grid md:grid-cols-2 items-center gap-8 py-6">
          <article>
            <h1 className="text-5xl text-pink-500 font-bold tracking-wider capitalize">
              Jenni's Training Record
            </h1>
            <p className="mt-4 text-3xl font-light tracking-wide ">
              Follow my training and progress in this year's Le Cure charity
              event!
            </p>
          </article>
          <article className="hidden md:block">
            <img
              src={Img1}
              alt="hero"
              className="mx-auto h-80 lg:-96 rounded-full border-4 border-pink-300/50 shadow-2xl"
            />
          </article>
        </div>
      </div>
    </>
  );
};
export default Hero;
