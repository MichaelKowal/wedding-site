import React from "react";

const Registry: React.FC = () => {
  return (
    <section className="bg-pakistan_green-900 w-full py-12 flex justify-center flex-col items-center">
      <a className="anchor" id="Registry"></a>
      <div className="text-center font-courgette sm:text-7xl text-5xl pb-6">
        Registry
      </div>
      <div className="sm:w-2/3 mx-5"></div>
      <div className="text-center text-xl sm:w-2/3 w-auto p-5">
        We are so excited to host you at our wedding. Many of you have been
        asking us how you can contribute. If you would like to give a gift
        please consider supporting our honeymoon. Click the button below to view our
        registry to help create a honeymoon filled with memories we can cherish
        for the rest of our lives.
      </div>
      <button
        id="registry-button"
        className="text-center text-xl p-5 text-white bg-dark_moss_green text-earth_yellow-900 rounded-md"
        onClick={() =>
          window.open(
            "https://www.honeyfund.com/site/kowal-riddell-05-19-2024",
            "_blank"
          )
        }
      >
        View Registry
      </button>
    </section>
  );
};

export default Registry;
