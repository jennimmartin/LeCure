const EventCard = ({ date, route, distance, duration, climb, high, low }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <div className="p-8 text-center">
        <h3 className="font-bold p-3">{date}</h3>
        <p>{route}</p>
        <p>{distance}</p>
        <p>{duration} (Ride time)</p>
        <p>{climb}</p>
        <h4 className="py-3 text-center font-semibold">Highlight </h4>
        <p>{high}</p>
        <h4 className="py-3 text-center font-semibold">Lowpoint </h4>
        <p>{low}</p>
      </div>
    </article>
  );
};
export default EventCard;
