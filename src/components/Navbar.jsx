import { links } from "../data";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed w-full  top-0 z-50 start-0 border-b border-pink-200 dark:border-pink-600fixed w-full bg-gradient-to-r from-pink-300 via-pink-100 to-pink-50 top-0 z-50 start-0 border-b border-pink-200 dark:border-pink-600">
      <div className="bg-gradient-to-r from-pink-300 via-pink-100 to-pink-50">
        <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <Button />
          <div className="flex gap-x-3  px-8">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className="capitalize text-large tracking-normal hover:text-pink-500 duration-300"
                >
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
