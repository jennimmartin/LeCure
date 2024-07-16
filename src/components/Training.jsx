import { trains } from "../data";
import SectionTitle from "./SectionTitle";
import TrainingCard from "./TrainingCard";

const Trains = () => {
  return (
    <section className="py-20 align-element" id="training">
      <SectionTitle text="training" />
      <div className="py-16 grid lg:grid-cols-2  xl:grid-cols-4 gap-8">
        {trains.map((train) => {
          return <TrainingCard key={train.id} {...train} />;
        })}
      </div>
    </section>
  );
};

export default Trains;
