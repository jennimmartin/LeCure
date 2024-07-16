const TrainingCard = ({ title, distance, duration, elevation, comments }) => {
  return (
    <article className="bg-gradient-to-r from-pink-200 to-pink-50 rounded-lg shadow-md hover:shadow-xl duration-300">
      <div className="p-8 text-center">
        <h2 className="underline capitalize font-bold p-3">{title}</h2>
        <p>Kilometers: {distance}</p>
        <p>Hours: {duration}</p>
        <p>Climbed: {elevation}</p>
        <h3 className="capitalize underline font-semibold py-3">week notes</h3>
        <p className="py-3">{comments}</p>
      </div>
    </article>
  );
};
export default TrainingCard;
