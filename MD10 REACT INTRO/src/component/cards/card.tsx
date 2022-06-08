import './cards.scss';

type CardContent = {
    title: string;
    desc: string;
}

const Card = ({ title, desc }: CardContent) => (
  <div className="card">
    <div className="card__text">
      <h1 className="card__h1">{title}</h1>
      <p className="card__p">{desc}</p>
    </div>
    <button className="card__button">nice</button>
  </div>
);

export default Card;
