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
      <img className="max-w-none" src={props.icon} width={65} />
    </div>
  );
};

export default HMDot;
