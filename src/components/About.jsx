import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section id="about">
      <div className="align-element">
        <SectionTitle text="the challenge" />
        <p className="text-justify py-6">Hey there!</p>
        <p className="text-justify py-3">
          Welcome to my first webpage. At the start of the year I signed up for
          a pretty intense charity cycle event. This is where I am going to
          record my training progression and the event itself. First a little
          background information.
        </p>
        <p className="text-justify py-3">
          Back in 2022 I invested in my first road bike. For those interested a
          Liv Langma Advance 2, for the non-cycle savvy amongst you, a metallic
          purple bike. It’s actually not the bike I ordered, due to Covid and
          the shipping crisis my bike didn’t turn up! Giant suggested that I
          come in to take a look at something similar in my size that had just
          arrived.
        </p>
        <p className="text-justify py-3">
          Looking back, it would seem that the stars aligned to give me the
          perfect bike to get me around the 2024 Le Cure. So what exactly is the
          Le Cure? Every August since 2014 a group of cyclists (Curistas) spend
          four days climbing the French Alps. So far they have raised an
          impressive £2.8 million for the Royal Marsden Cancer Charity and
          created six Le Cure research fellowships. A cause close to many of our
          hearts
        </p>
        <p className="text-justify py-3">
          Each year the Curistas climb more vertical metres than Mount Everest.
          This year the course will wind through 386km through France, Italy and
          Switzerland before returning to France in Chamonix to finish at the
          foot of the Mt Blanc.
        </p>
        <p className="text-justify py-3">
          This is going to be an incredibly hard challenge for me and in
          previous years when Rachael had asked me if I was interested in
          signing up with her, I’d always responded “most definitely not.”{" "}
        </p>
        <p className="text-justify py-3">
          Over the Christmas period, various diagnoses of cancer reminded me
          that tomorrow isn’t given and if I was ever going to join Rachael on
          this crazy adventure there was no better time than now.
        </p>
        <p className="text-justify py-3">
          I will be riding in memory of Aunt Linda who lost her battle to
          cancer. Her grit and strength will be my inspiration and resolve to
          get me through the many times I will need to dig deep in training and
          the course itself.
        </p>
        <p className="text-justify py-3">Please consider donating.</p>
      </div>
    </section>
  );
};
export default About;
