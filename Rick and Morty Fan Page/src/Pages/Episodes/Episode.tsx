import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PrevNextButtons from '../../Components/Buttons/PrevNextButtons';
import Loader from '../../Components/Loader/Loader';
import { EpisodeProps, getImages } from '../../Data/EpisodeData/episodes';

const Episode = () => {
  const [currentEp, setCurrentEp] = useState<EpisodeProps>();
  const { id } = useParams();
  const [nextEp, setNextEp] = useState(Number(id));
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const navigate = useNavigate();

  const getEp = async () => {
    setIsLoading(true);
    try {
      const ep = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
      setCurrentEp(ep.data);
    } catch (error) {
      navigate('/404');
    } finally {
      setIsLoading(false);
    }
  };

  const getNextEp = async (num: number) => {
    setIsLoading(true);
    try {
      const ep = await axios.get(`https://rickandmortyapi.com/api/episode/${num}`);
      setCurrentEp(ep.data);
    } catch (error) {
      navigate('/404');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getEp();
  }, []);

  useEffect(() => {
    if (nextEp !== Number(id)) {
      navigate(`/episodes/${nextEp}`);
      getNextEp(nextEp);
    }
  }, [nextEp]);

  return (
    isLoading ? <Loader /> : (
      <div className="episode-page">
        <PrevNextButtons
          backFunction={() => navigate('/episodes')}
          nextFunction={() => setNextEp(nextEp + 1)}
          prevFunction={() => Number(id) !== 1 && setNextEp(nextEp - 1)}
        />
        <div className="episode__title">
          <span>{`Preview of ${currentEp?.name} (${currentEp?.episode})`}</span>
        </div>
        <div className="episode__video">
          <iframe
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="ep__video"
            src={getImages(currentEp && currentEp.id)?.video}
          />
        </div>

        <div className="episode__appearance">
          <span>{`Total of ${currentEp?.characters.length} characters appear in this episode`}</span>
        </div>
      </div>
    ));
};

export default Episode;
