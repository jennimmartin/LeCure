import { trains } from "../data";
import SectionTitle from "./SectionTitle";
import TrainingCard from "./TrainingCard";

const Trains = () => {
  return (
    <div className="">
      <section className="py-10 align-element" id="training">
        <SectionTitle text="training" />
        <p className="text-justify py-3">
          Already, I have questioned why I signed up for this event. Why would
          anyone enjoy climbing up a 12 percent gradient in the pouring rain, my
          back wasn't very happy. Below is a snap shot of my training to date,
          scheduled updates will be on Sunday evenings.
        </p>
        <div className="py-16 grid lg:grid-cols-2  xl:grid-cols-4 gap-8">
          {trains.map((train) => {
            return <TrainingCard key={train.id} {...train} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Trains;
