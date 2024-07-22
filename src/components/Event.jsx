import { events } from "../data";
import SectionTitle from "./SectionTitle";
import EventCard from "./EventCard";

const Trains = () => {
  return (
    <section className="py-20 align-element" id="event">
      <SectionTitle text="event" />
      <p className="text-justify py-3">
        I will be arriving in Meribel on Tuesday 20th August 2024, I live just
        30 minutes away. I am very much looking forward to meet fellow Curistas
        and the support team. It will be great to put faces to names and get
        ready for the Grand Depart the next day. At the time of writing I can't
        get my head around tackling so many climb and kilometers over back to
        back days. Below are the crazy riding stats of each day's riding that I
        will be attempting to ride.
      </p>
      <div className="py-16 grid lg:grid-cols-2  xl:grid-cols-4 gap-8">
        {events.map((event) => {
          return <EventCard key={event.id} {...event} />;
        })}
      </div>
      <p className="text-justify py-3">
        I plan on adding a tracking link to enable you to keep an eye on me,
        should you wish to watch a dot move very slowly around a map of the
        Alps. I am expecting cycling through Hautecour will be mentally quite
        tough, could be quite tempting to just go home and spend the day with
        the cats.
      </p>
      <p className="text-justify py-3">
        Further information can be found be found on Le Cure website. You can
        also read about The Royal Marsden Cancer Charity, both linked below.
      </p>
      <p className="text-justify py-3">
        Thank you for your kind donations and support. If you haven't sponsored
        me as yet it's never to late and every penny is appreciated.
      </p>
    </section>
  );
};

export default Trains;
