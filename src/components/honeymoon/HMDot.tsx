import useWindowDimensions from "../../hooks/useWindowDimensions";

interface HMDotProps {
  icon: string;
}

const HMDot: React.FC<HMDotProps> = (props) => {
  const { width } = useWindowDimensions();
  if (width < 640) {
    return <div />;
  }
  return (
    <div className="rounded-full w-16 h-16 overflow-hidden">
      <img
        className="max-w-none"
        style={{ marginLeft: -6 }}
        src={props.icon}
        height={75}
        width={75}
      />
    </div>
  );
};

export default HMDot;
