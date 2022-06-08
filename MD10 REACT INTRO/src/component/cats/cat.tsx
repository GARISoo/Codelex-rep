import './cats.scss';

type CatSource = {
    text: string;
}

const Cat = ({ text }: CatSource) => (
  <img src={text} alt="" className="cats__img" />
);

export default Cat;
