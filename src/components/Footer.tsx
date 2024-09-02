interface FooterProps {
  bgColor?: string;
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div
      id="Footer"
      className={`${
        props.bgColor ?? "bg-cornsilk"
      } w-full h-50 flex flex-col justify-center items-center`}
    >
      <div className="text-[black] text-center font-courgette  p-6">
        © 2024 Michael Riddell-Kowal
      </div>
      <img
        src="/android-chrome-512x512.png"
        alt="pood"
        className="w-20 h-20 mx-auto"
      />
    </div>
  );
};

export default Footer;
