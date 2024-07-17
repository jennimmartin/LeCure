import { trains } from "../data";
import SectionTitle from "./SectionTitle";
import TrainingCard from "./TrainingCard";

const Trains = () => {
  return (
    <div className="">
      <section className="py-10 align-element" id="training">
        <SectionTitle text="training" />
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
