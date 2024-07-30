import React from "react";

const scheduleList = [
  {
    time: "12:30 PM",
    event: "Shuttle pick up",
    description:
      "Shuttle arrives at Holiday Inn Express for pick up to the venue.",
  },
  {
    time: "2:00 PM",
    event: "Ceremony",
    description:
      "Join us for a beautiful ceremony by the lake. Please arrive early to find parking. Follow the signs to the ceremony site.",
  },
  {
    time: "3:00 PM",
    event: "Lake time!",
    description:
      "Take some time to enjoy the lake and surrounding trails. There will be coffee, tea, and games to play.",
  },
  {
    time: "5:00 PM",
    event: "Reception",
    description: "Return to the gazebo for dinner and dancing.",
  },
  {
    time: "5:30 PM",
    event: "Dinner begins",
    description: "Enjoy a delicious meal catered by Global Fusion.",
  },
  { time: "8:00 PM", event: "Dance the night away!", description: "" },
  {
    time: "10:00 PM",
    event: "Shuttle leaves venue",
    description: "Shuttle leaves back to Holiday Inn Express.",
  },
];
const Schedule: React.FC = () => {
  const renderSchedule = () =>
    scheduleList.map((item) => (
      <div className="flex flex-col">
        <div className="text-center text-4xl">{item.time}</div>
        <div className="text-center text-3xl">{item.event}</div>
        <div className="text-center text-xl">{item.description}</div>
      </div>
    ));

  return (
    <section className="bg-cornsilk w-full py-12 px-5">
      <a className="anchor" id="Schedule"></a>
      <div className="text-center font-courgette sm:text-7xl text-5xl pb-6">
        Schedule
      </div>
      <div className="flex flex-col gap-5 pt-5">{renderSchedule()}</div>
    </section>
  );
};

export default Schedule;
