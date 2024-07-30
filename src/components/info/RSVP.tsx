import React from "react";

const RSVP: React.FC = () => {
  return (
    <div className="bg-pakistan_green-900 flex flex-col justify-end items-center w-full">
      <a className="anchor" id="RSVP"></a>
      <div className="text-center font-courgette sm:text-7xl text-5xl p-6">
        RSVP
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdenV6IoOM0E2OIEVw3m-weKqNHG0ZW9wfnZzXH7SYdnFKZYg/viewform?embedded=true"
        className="w-full"
        height="1850px"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default RSVP;
