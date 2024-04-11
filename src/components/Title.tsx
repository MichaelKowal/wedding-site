const Title: React.FC = () => {
  const handleOptionClick = (id: string) => {
    if (!id) return;
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderSmallMenu = () => {
    const handleMenuClick = () => {
      const icon1 = document.getElementById("a");
      const icon2 = document.getElementById("b");
      const icon3 = document.getElementById("c");
      const nav = document.getElementById("nav");
      const blue = document.getElementById("blue");

      icon1?.classList.toggle("a");
      icon2?.classList.toggle("c");
      icon3?.classList.toggle("b");
      nav?.classList.toggle("show");
      blue?.classList.toggle("slide");
    };
    return (
      <div className="sm:hidden block">
        <div className="hamburger-icon" id="icon" onClick={handleMenuClick}>
          <div className="icon-1" id="a"></div>
          <div className="icon-2" id="b"></div>
          <div className="icon-3" id="c"></div>
          <div className="clear"></div>
        </div>

        <nav id="nav">
          <ul onClick={handleMenuClick}>
            <li className="text-center">
              <div
                className="title-item text-gray-800 cursor-pointer"
                onClick={() => handleOptionClick("#About")}
              >
                About
              </div>
            </li>
            <li className="text-center">
              <div
                className="title-item text-gray-800 cursor-pointer"
                onClick={() => handleOptionClick("#Schedule")}
              >
                Schedule
              </div>
            </li>
            <li className="text-center">
              <div
                className="title-item text-gray-800 cursor-pointer"
                onClick={() => handleOptionClick("#Menu")}
              >
                Menu
              </div>
            </li>
            <li className="text-center">
              <div
                className="title-item text-gray-800 cursor-pointer"
                onClick={() => handleOptionClick("#Vibes")}
              >
                Vibes
              </div>
            </li>
            <li className="text-center">
              <div
                className="title-item text-gray-800 cursor-pointer"
                onClick={() => handleOptionClick("#Registry")}
              >
                Registry
              </div>
            </li>
            <li className="text-center">
              <div
                className="title-item text-gray-800 cursor-pointer"
                onClick={() => handleOptionClick("#Information")}
              >
                FAQ
              </div>
            </li>
          </ul>
        </nav>

        <div className="dark-blue" id="blue"></div>
      </div>
    );
  };
  return (
    <>
      <header
        id="Title"
        className={`bg-dark_moss_green fixed top-0 z-50 w-full sm:block hidden`}
      >
        <nav className="px-6 py-9 text-earth_yellow-900">
          <div className="flex justify-around items-center text-2xl">
            <div
              className="title-item text-gray-800 cursor-pointer"
              onClick={() => handleOptionClick("#About")}
            >
              About
            </div>
            <div
              className="title-item text-gray-800 cursor-pointer"
              onClick={() => handleOptionClick("#Schedule")}
            >
              Schedule
            </div>
            <div
              className="title-item text-gray-800 cursor-pointer"
              onClick={() => handleOptionClick("#Menu")}
            >
              Menu
            </div>
            <div
              className="title-item text-gray-800 cursor-pointer"
              onClick={() => handleOptionClick("#Vibes")}
            >
              Vibes
            </div>
            <div
              className="title-item text-gray-800 cursor-pointer"
              onClick={() => handleOptionClick("#Registry")}
            >
              Registry
            </div>
            <div
              className="title-item text-gray-800 cursor-pointer"
              onClick={() => handleOptionClick("#Information")}
            >
              FAQ
            </div>
          </div>
        </nav>
      </header>

      {renderSmallMenu()}
    </>
  );
};

export default Title;
