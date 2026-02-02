import { events } from "../data";
import SectionTitle from "./SectionTitle";
import EventCard from "./EventCard";

const Trains = () => {
  return (
    <section className="py-20 align-element" id="event">
      <SectionTitle text="event" />
      <p className="text-justify py-3">
        It has been such a privilege to take part in Le Cure 2024. The event was
        so well organised and the people were fabulous, including the support
        crew and all participants. It was amazing to ride alongside professors
        Ian Smith and Nicholas Turner who run the research that Le Cure funds.
      </p>
      <p className="text-justify py-3">
        Throughout training it was always in the back of my mind that this event
        was going to be impossible, my longest ride prior to starting training
        was 30km. Out on the event I got to finally push the doubt to one side
        and think - I am doing it.
      </p>
      <p className="text-justify py-3">
        Below are the stats of each stage that I rode, each had it's own
        physical and mental challenges to get through.
      </p>
      <div className="py-16 grid lg:grid-cols-2  xl:grid-cols-4 gap-8">
        {events.map((event) => {
          return <EventCard key={event.id} {...event} />;
        })}
      </div>
      <p className="text-justify py-3">
        I really did find out what your body can be capable of over a prolonged
        period time. I went in to the event not 100%, still coughing, having
        missed two weeks of training. I got round by managing my effort and
        using all the knowledge Suzanne Duncanson, my Alexander Technique
        teacher, taught whilst living with RSI. It was horrendously hot at
        times, with my Garmin recording temperatures over 45 degrees.
      </p>
      <p className="text-justify py-3">
        The real unexpected bonus of the ride was how much my skill level
        increased. I hadn't even considered this, there were several moments
        particularly on the climb to Verbier when I thought to myself just a few
        days ago I would of fallen. I guess it is not hugely surprising as I did
        spend 27.5 hours on my bike during the week of the event.
      </p>

      <p className="text-justify py-3">
        Further information can be found be found on Le Cure website, the climbs
        are detailed and there are maps of the route. You can also read about
        The Royal Marsden Cancer Charity, both are linked below.
      </p>
      <p className="text-justify py-3">
        Thank you for your kind donations and support.
      </p>
      <p className="text-justify py-3">Jenni x</p>
      <p className="text-justify">
        PS. If you haven't sponsored me as yet it's never too late and every
        penny is appreciated.
      </p>
    </section>
  );
};

export default Trains;
