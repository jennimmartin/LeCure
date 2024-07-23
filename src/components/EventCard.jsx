const EventCard = ({ date, route, distance, climb }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <div className="p-8 text-center">
        <h3 className="font-bold p-3">{date}</h3>
        <p>{route}</p>
        <p>{distance}</p>
        <p>{climb}</p>
      </div>
    </article>
  );
};
export default EventCard;
