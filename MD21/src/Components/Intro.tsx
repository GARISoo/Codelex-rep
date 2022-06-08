import { useNavigate } from 'react-router-dom';
import '../App.scss';

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="intro">
      <div className="intro__left">
        <h1 className="intro__h1">Consumer Credit</h1>
        <h2 className="intro__h2">Loans that suits your needs!</h2>
        <span className="intro__span">Till 31.05.2022 no first time percentages for your loan.</span>
        <ul className="intro__ul">
          <li>From 300$ up to 19 000$</li>
          <li>Instant money transfer to your account after signing</li>
          <li>First time loan with 0% commission</li>
        </ul>
        <button
          className="intro__btn"
          onClick={() => navigate('/survey')}
        >
          Apply now
        </button>
      </div>
      <div className="intro__right">
        <img
          src="https://www.swedbank.lv/img/private/investor/portfolio/826x600-analysis.jpg"
          alt="phot"
          className="intro__img"
        />
      </div>
    </div>
  );
};

export default Intro;
