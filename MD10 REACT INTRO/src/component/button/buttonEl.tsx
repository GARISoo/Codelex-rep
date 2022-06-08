import './buttons.scss';

type ButtonName = {
    text: string;
}

const Button = ({ text }: ButtonName) => (
  <button className="button">
    { text }
  </button>
);

export default Button;
