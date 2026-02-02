import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <a href="https://sportsgiving.co.uk/sponsorship/entry/1129420">
        <button
          className="border px-7 bg-pink-500 border-pink-500 rounded-lg text-white shadow-md justify-self-start hover:bg-pink-300 shadow-xl duration-300
       "
        >
          Click to donate
        </button>
      </a>
    </div>
  );
};
export default Button;
