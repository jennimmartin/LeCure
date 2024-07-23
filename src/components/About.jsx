import SectionTitle from "./SectionTitle";
import Button from "./Button";

const About = () => {
  return (
    <section id="about">
      <div className="align-element py-10">
        <SectionTitle text="the challenge" />
        <p className="text-justify py-6">Hey there!</p>
        <p className="text-justify py-3">
          Welcome to my first webpage that I've coded. At the start of the year
          I signed up for a pretty intense charity cycle event. This is where I
          am going to record a snapshot of all the training that went into the
          event. Plus the high's and low's of each day of the event.
        </p>
        <p className="text-justify py-3">
          First a little background information. Back in 2022 I invested in my
          first road bike, for those interested a Liv Langma Advanced Disc 2, a
          metallic purple bike. It’s actually not the bike I ordered! Due to
          Covid and the shipping crisis my bike didn’t turn up! Giant got in
          contacted and suggested that I came in to take a look at something
          similar in my size which had just arrived, "lets get you out on the
          road."
        </p>
        <p className="text-justify py-3">
          Looking back, it would seem that the stars aligned so I had the
          perfect bike to get me around the Le Cure 2024. So what exactly is the
          Le Cure? Every August since 2014 a group of cyclists (Curistas) spend
          four days climbing the French Alps. So far they have raised an
          impressive £2.8 million for the Royal Marsden Cancer Charity and
          created six Le Cure research fellowships, a cause that I am sure is
          close to many of our hearts.
        </p>
        <p className="text-justify py-3">
          Each year the Curistas climb more vertical metres than Mount Everest.
          This year the course will wind through 386km in France, Italy and
          Switzerland before returning to France, Chamonix to finish at the foot
          of the Mt Blanc - having completed a climb total of 10,413 meters!
        </p>
        <p className="text-justify py-3">
          This is going to be an incredibly hard challenge. In previous years
          when Rachael had asked me if I was interested in signing up with her,
          I’d always responded “most definitely not.”
        </p>
        <p className="text-justify py-3">
          Over the Christmas period I was reminded that tomorrow isn’t given. If
          I was ever going to join Rachael on this crazy adventure there was no
          better time than now.
        </p>
        <p className="text-justify py-3">
          I will be riding in memory of Auntie Linda who lost her battle to
          cancer. Her grit and strength will be my inspiration to get me through
          the many times I will need to dig deep in training and the course
          itself.
        </p>
        <p className="text-justify py-3">
          I would be very grateful if you would consider donation.
        </p>
        <div className="py-3">
          <Button />
        </div>
      </div>
    </section>
  );
};
export default About;
