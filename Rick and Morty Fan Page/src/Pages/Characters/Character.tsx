import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PrevNextButtons from '../../Components/Buttons/PrevNextButtons';
import Loader from '../../Components/Loader/Loader';
import { CharacterProps } from '../../Data/CharacterData/characters';

const Character = () => {
  const [currentChar, setCurrentChar] = useState<CharacterProps>();
  const { id } = useParams();
  const [nextChar, setNextChar] = useState(Number(id));
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const navigate = useNavigate();

  const getChar = async () => {
    setIsLoading(true);
    try {
      const char = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCurrentChar(char.data);
    } catch (error) {
      navigate('/characters');
    } finally {
      setIsLoading(false);
    }
  };

  const getNextChar = async (num: number) => {
    setIsLoading(true);
    try {
      const char = await axios.get(`https://rickandmortyapi.com/api/character/${num}`);
      setCurrentChar(char.data);
    } catch (error) {
      navigate('/characters');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getChar();
  }, []);

  useEffect(() => {
    if (nextChar !== Number(id)) {
      navigate(`/characters/${nextChar}`);
      getNextChar(nextChar);
    }
  }, [nextChar]);

  return (
    isLoading ? <Loader /> : (
      <div className="cards column">
        <PrevNextButtons
          backFunction={() => navigate('/characters')}
          nextFunction={() => setNextChar(nextChar + 1)}
          prevFunction={() => Number(id) !== 1 && setNextChar(nextChar - 1)}
        />
        {currentChar && (
        <div className="single-card">
          <div className="single-card__header">
            <h1 className="single-card__h1">Identification Card</h1>
          </div>
          <div className="single-card__main">
            <div className="single-card__left">
              <img src={currentChar?.image} alt="selfie" className="single-card__img" />
            </div>
            <div className="single-card__right">
              <div className="single-card__about">
                <span className="single-card__name">{currentChar?.name}</span>
                <span className="single-card__desc">{`Currently: ${currentChar?.status}`}</span>
                <span className="single-card__desc">{`Gender: ${currentChar?.gender}`}</span>
                <span className="single-card__desc">{`Species: ${currentChar?.species}`}</span>
                <span className="single-card__desc">{`Origin: ${currentChar?.origin.name}`}</span>
              </div>
              <div className="single-card__appearance">
                <span className="single-card__desc">{`Appearance: ${currentChar?.episode.length} episodes`}</span>
              </div>
            </div>
          </div>
        </div>
        )}

      </div>
    ));
};

export default Character;
