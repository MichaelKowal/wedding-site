import "../styles/Title.css";

const Title: React.FC = () => {
  return (
    <header className={`bg-earth_yellow flex sticky z-0 w-screen}`}>
      <nav className="container mx-auto px-6 py-9 text-earth_yellow-900 ">
        <div className="flex justify-between items-center">
          <a id="title" href="#" className="text-2xl font-bold text-gray-800">
            Georgia and Michael
          </a>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-800">
              RSVP
            </a>
            <a href="#About" className="text-gray-800">
              About
            </a>
            <a href="#" className="text-gray-800">
              FAQ
            </a>
            <a href="#" className="text-gray-800">
              Top
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Title;
