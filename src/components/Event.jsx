import { events } from "../data";
import SectionTitle from "./SectionTitle";
import EventCard from "./EventCard";

const Trains = () => {
  return (
    <section className="py-20 align-element" id="event">
      <SectionTitle text="event" />
      <p className="text-justify py-3">
        I will be arriving in Meribel on Tuesday 20th August 2024, I live just
        30 minutes away so not far to go! I am very much looking forward to
        meeting fellow Curistas and the support team. It will be great to put
        faces to names and get ready for the Grand Depart. At the time of
        writing I can't get my head around tackling so many climbs and
        kilometers over four, back to back days. Below are the crazy stats of
        each day's riding that I will be attempting to survive.
      </p>
      <div className="py-16 grid lg:grid-cols-2  xl:grid-cols-4 gap-8">
        {events.map((event) => {
          return <EventCard key={event.id} {...event} />;
        })}
      </div>
      <p className="text-justify py-3">
        I will add highs and lows to each day so you can see how I am getting
        on. I think I will be pretty tired so updates will be small during the
        event. I am expecting cycling through Hautecour to be mentally quite
        tough, could be quite tempting to just go home and spend the day with
        the cats!
      </p>
      <p className="text-justify py-3">
        During the event you can click on the donation link and an Track Link
        will be availble. If I am cycling the active tracking will be live.
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
