/* eslint-disable max-len */
/* eslint-disable camelcase */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { EpisodeProps, getImages } from '../../Data/EpisodeData/episodes';

const Episodes = () => {
  const [filteredEpisodes, setFilteredEpisodes] = useState<EpisodeProps[]>();
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const createArray = (start: number, end: number) => Array(Math.ceil(end - start)).fill(start).map((x, y) => x + y);

  const getFilteredEps = async (eps: any) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${eps}`);
      setFilteredEpisodes(response.data);
    } catch (error) {
      navigate('/404');
    } finally {
      setIsLoading(false);
    }
  };

  const seasons = [
    {
      id: 0,
      name: 'All',
      onClick: () => {
        setSearchParams({ season: 'all' });
      },
    },
    {
      id: 1,
      name: 'Season 1',
      onClick: () => {
        setSearchParams({ season: '1' });
      },
    },
    {
      id: 2,
      name: 'Season 2',
      onClick: () => {
        setSearchParams({ season: '2' });
      },
    },
    {
      id: 3,
      name: 'Season 3',
      onClick: () => {
        setSearchParams({ season: '3' });
      },
    },
    {
      id: 4,
      name: 'Season 4',
      onClick: () => {
        setSearchParams({ season: '4' });
      },
    },
    {
      id: 5,
      name: 'Season 5',
      onClick: () => {
        setSearchParams({ season: '5' });
      },
    },
  ];

  useEffect(() => {
    getFilteredEps('1,12,22,32,42');
    if (searchParams.get('season') === 'all') getFilteredEps(createArray(1, 52));
    if (searchParams.get('season') === '1') getFilteredEps(createArray(1, 12));
    if (searchParams.get('season') === '2') getFilteredEps(createArray(12, 22));
    if (searchParams.get('season') === '3') getFilteredEps(createArray(22, 32));
    if (searchParams.get('season') === '4') getFilteredEps(createArray(32, 42));
    if (searchParams.get('season') === '5') getFilteredEps(createArray(42, 52));
  }, [searchParams]);

  return (
    isLoading ? <Loader /> : (
      <div className="body">
        <h1 className="body__h1">Episodes</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="episodes__search"
          placeholder="Episode name goes here..."
        />
        <div className="body__actions">
          {seasons.map((el) => (
            <button
              key={el.id}
              onClick={el.onClick}
              className="filter-btn"
            >
              {el.name}
            </button>
          ))}
        </div>
        <div className="episodes">
          {filteredEpisodes && filteredEpisodes.map(({
            id, name, episode, air_date,
          }) => (
            (name.toLowerCase().includes(inputValue.toLowerCase())
          || episode.toLowerCase().includes(inputValue.toLowerCase())) ? (

            <div className="episode" key={id} onClick={() => navigate(`/episodes/${id}`)}>
              <div className="episode__left">
                <img src={getImages(id)?.image} alt="selfie" className="episode__img" />
              </div>
              <div className="episode__middle">
                <span className="episode__title">{name}</span>
                <span className="episode__ep">{episode}</span>
              </div>
              <div className="episode__right">
                {`Released: ${air_date}`}
              </div>
            </div>
              ) : null
          ))}
        </div>
      </div>
    ));
};

export default Episodes;
