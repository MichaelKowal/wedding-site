import { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    (function (d, id) {
      if (d.getElementById(id)) {
        if ((window as any).__TOMORROW__) {
          (window as any).__TOMORROW__.renderWidget();
        }
        return;
      }
      const fjs = d.getElementsByTagName("script")[0];
      const js = d.createElement("script");
      js.id = id;
      (js as HTMLScriptElement).src =
        "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

      fjs.parentNode?.insertBefore(js, fjs);
    })(document, "tomorrow-sdk");
  }, []);

  return (
    <section className="bg-pakistan_green-900 w-full py-12 flex justify-center flex-col items-center">
      <a className="anchor" id="About"></a>
      <div className="text-center sm:text-7xl text-5xl pb-6">About</div>
      <div className="text-center text-xl sm:w-2/3 w-auto p-5">
        Come join us for our wedding! It will be a day of fun and celebration as
        we start this new chapter of our lives!
      </div>
      <div className="text-center text-xl sm:w-2/3 w-auto p-5">
        We will be getting married on May 19th, 2024 at Princess Lake Leisure
        and Lodging in Terrace, BC. It is a private space that we will have full
        access to, including walking trails, access to a waterfall, and some
        canoes, kayaks, and kids boats. There is limited cell service and no
        wifi so come prepared to disconnect and enjoy the outdoors! The venue is
        approximately 30 minutes east of Terrace on Highway 16, shown in the map
        below.
      </div>
      <div className="text-center text-xl sm:w-2/3 w-auto p-5">
        There is space at the venue for RVs and tents. We encourage anyone who
        is willing to stay and camp at the lake with us. For those who would
        rather stay in a hotel, we recommend the Holiday Inn Express in
        Thornhill. There is an airport shuttle to and from the hotel. We will
        also be providing a shuttle to and from the venue for the ceremony and
        reception.
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.153554876016!2d-128.38380008746262!3d54.882672772660996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5474c5a339ac0f71%3A0x61e3cf36a8ded62!2sPrincess%20Lake%20Leisure%20and%20Lodging!5e0!3m2!1sen!2sca!4v1703655788354!5m2!1sen!2sca"
        className="sm:w-2/3 w-auto"
        height="450"
        loading="lazy"
      ></iframe>
      <div className="text-center text-3xl sm:w-2/3 w-auto pt-5">
        Current Weather in Terrace
      </div>
      <div
        className="tomorrow sm:w-2/3 m-5"
        data-location-id="017102"
        data-language="EN"
        data-unit-system="METRIC"
        data-skin="light"
        data-widget-type="upcoming"
        style={{ paddingBottom: "22px", position: "relative" }}
      >
        <a
          href="https://www.tomorrow.io/weather-api/"
          rel="nofollow noopener noreferrer"
          target="_blank"
          style={{
            position: "absolute",
            bottom: 0,
            transform: "translateX(-50%)",
            left: "50%",
          }}
        >
          <img
            alt="Powered by the Tomorrow.io Weather API"
            src="https://weather-website-client.tomorrow.io/img/powered-by.svg"
            width="250"
            height="18"
          />
        </a>
      </div>
    </section>
  );
};

export default About;
