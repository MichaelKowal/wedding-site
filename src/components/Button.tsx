interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  return (
    <button
      className="bg-dark_moss_green-800 hover:bg-dark_moss_green-600 text-white font-bold w-60 md:w-40 lg:w-60 h-20 rounded text-3xl md:text-xl lg:text-3xl opacity-90"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
