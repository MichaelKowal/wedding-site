const About: React.FC = () => {
  return (
    <section id="About" className="bg-pakistan_green-900 w-screen p-12">
      <div className="">
        <div className="text-center font-ms-madi text-9xl p-6">About</div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.153554876016!2d-128.38380008746262!3d54.882672772660996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5474c5a339ac0f71%3A0x61e3cf36a8ded62!2sPrincess%20Lake%20Leisure%20and%20Lodging!5e0!3m2!1sen!2sca!4v1703655788354!5m2!1sen!2sca"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default About;
