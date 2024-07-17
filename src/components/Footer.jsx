const Footer = () => {
  return (
    <section className="text-center bg-gradient-to-r from-pink-300 via-pink-100 to-pink-50">
      <section className="align-element py-16 grid lg:grid-cols-3  xl:grid-cols-3 gap-5">
        <a className="self-center" href="https://lecure.org/">
          <img
            className="h-20 w-20"
            src="https://lecure.org/wp-content/themes/lecure-theme-v4/library/img/le-cure-logo.png"
            alt="le cure"
          />
        </a>
        <a className="self-center" href="https://www.royalmarsden.org/">
          <img
            className="h-20 w-40 "
            src="https://www.royalmarsden.org/themes/custom/rmcc/logo.svg"
            alt="royal marsden logo"
          />
        </a>
        <a
          className="self-center"
          href="https://sportsgiving.co.uk/sponsorship/entry/1129420"
        >
          <img
            className="h-20 w-40"
            src="https://s3.eu-west-1.amazonaws.com/assets.race-nation.com/platform-resources/SportsGiving+Logo+on+White.png"
            alt="sportsgiving logo"
          />
        </a>
      </section>
      <h5>
        created by jennimmartin | &copy;{""}
        {new Date().getFullYear()}
      </h5>
      <div className="border-b-2 border-pink-500"></div>
    </section>
  );
};
export default Footer;
