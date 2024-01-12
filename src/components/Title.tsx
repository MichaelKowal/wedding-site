const Title: React.FC = () => {
  return (
    <header id="Title" className={`bg-earth_yellow fixed top-0 z-50 w-screen`}>
      <nav className="px-6 py-9 text-earth_yellow-900 ">
        <div className="flex justify-around items-center text-2xl">
          <a href="#About" className="text-gray-800">
            About
          </a>
          <a href="#Information" className="text-gray-800">
            FAQ
          </a>
          <a href="#RSVP" className="text-gray-800">
            RSVP
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Title;
