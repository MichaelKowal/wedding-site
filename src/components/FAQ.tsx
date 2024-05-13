import React from "react";

const Information: React.FC = () => {
  const questions = [
    {
      q: "How do I get to the venue?",
      a: "The venue is located approximately 30 minutes outside of Terrace, headed toward Kitwanga. For people flying in we recommend staying at the Holiday Inn Express in Thornhill. There is an airport shuttle to and from the hotel. We will be providing a shuttle to and from the venue for the ceremony and reception. If you are driving, please be sure to have a designated driver.",
    },
    {
      q: "Where should I stay?",
      a: "There is lots of room for RVs and tents at the venue and we encourage anyone who is willing to stay at the lake with us. If you would rather stay in Terrace we recommend staying at the Holiday Inn Express in Thornhill",
    },
    {
      q: "What time should I arrive?",
      a: "The ceremony will begin at 2pm, so we recommend arriving at the venue around 1:30pm. If you are taking the shuttle please be at the Holiday Inn Express in Thornhill by 12:45pm.",
    },
    {
      q: "Where should I park?",
      a: "There is some space to park RVs at the lake but we ask that people who drive in park along the road and walk down to ensure there is room for everyone to enjoy the space.",
    },
    {
      q: "What should I wear?",
      a: "Something nice. It is an outdoor event so dress accordingly. If you plan on staying late make sure you have something warm to put on when the sun goes down.",
    },
    {
      q: "Will there be alcohol?",
      a: "Yes, we will have some available and you are welcome to bring your favorite drinks!",
    },
    {
      q: "How many people are coming?",
      a: "We are expecting around 80 guests.",
    },
    {
      q: "How do I RSVP?",
      a: "RSVPs are closed now. If you have any questions please reach out to us directly.",
    },
    { q: "Can I bring my dog?", a: "No pups allowed, sorry!" },
  ];

  const renderQuestions = () => {
    return questions.map((question) => {
      return (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <div className="text-center text-3xl">{question.q}</div>
            <div className="text-center text-xl">{question.a}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="bg-cornsilk w-full py-12">
      <a className="anchor" id="Information"></a>
      <div className="text-center font-courgette sm:text-7xl text-5xl pb-6">
        FAQ
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-5 sm:w-2/3 w-auto p-5">
          {renderQuestions()}
        </div>
      </div>
    </section>
  );
};

export default Information;
