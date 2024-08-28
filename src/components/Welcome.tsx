import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen w-full flex sm:flex-row flex-col sm:justify-around justify-end sm:items-end items-center gap-4 md:px-40 sm:pb-40 pb-12 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('assets/images/home-bg.jpeg')" }}
    >
      <Button onClick={() => navigate("/wedding-pics")}>Pictures</Button>
      <Button onClick={() => navigate("/honeymoon")}>Honeymoon</Button>
      <Button onClick={() => navigate("/info")}>Info</Button>
    </div>
  );
};

export default Welcome;
