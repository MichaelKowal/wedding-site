import React, { useEffect } from "react";
import palette from "../../assets/svgs/palette.svg";
import dressShoe from "../../assets/dressShoe.png";
import sandal from "../../assets/sandal.png";
import squareHeel from "../../assets/squareHeel.png";

const Vibes: React.FC = () => {
  useEffect(() => {}, []);
  return (
    <section className="bg-cornsilk w-full py-12 flex justify-center flex-col items-center">
      <a className="anchor" id="Vibes"></a>
      <div className="text-center font-courgette sm:text-7xl text-5xl pb-6">
        Vibes
      </div>
      <div className="text-center text-xl sm:w-2/3 w-auto p-5">
        Our wedding is about growing our love and to represent that growth we
        are using a spring theme. Feel free to wear bright colours and fun
        floral/detailed patterns. However of course, you are welcome to wear
        what ever makes you feel comfortable. Our wedding colours are green and
        yellow. Please avoid wearing light green or white the day of the wedding
        however yellow is free game.
      </div>
      <img src={palette} alt="palette" className="sm:w-2/3 mx-5" />
      <div className="text-center text-xl sm:w-2/3 w-auto p-5">
        The event will be outside and on grass so make sure to wear some sturdy
        shoes that you feel comfortable in like sandals, square heels, or dress
        shoes.
      </div>
      <div className="flex flex-row justify-between p-5">
        <img src={dressShoe} alt="Dress Shoe" className="max-w-20 max-h-20" />
        <img
          src={sandal}
          alt="sandal"
          className="max-w-20 max-h-20 sm:mx-20 mx-10"
        />
        <img src={squareHeel} alt="Square Heel" className="max-w-20 max-h-20" />
      </div>
    </section>
  );
};

export default Vibes;
