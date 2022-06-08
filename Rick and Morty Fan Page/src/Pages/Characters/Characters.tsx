import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PageSwitcher from '../../Components/Buttons/PageSwitcher';
import Loader from '../../Components/Loader/Loader';
import { CharacterProps } from '../../Data/CharacterData/characters';

const Characters = () => {
  const [filteredChars, setFilteredChars] = useState<CharacterProps[]>();
  const [filter, setFilter] = useState<String>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<Number>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const getNextPage = async (page: String, status: String) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&status=${status}`);
      setFilteredChars(response.data.results);
      setTotalPages(response.data.info.pages);
    } catch (error) {
      navigate('/404');
    } finally {
      setIsLoading(false);
    }
  };

  const requestFilteredChars = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?${searchParams}`);
      setFilteredChars(response.data.results);
      setTotalPages(response.data.info.pages);
    } catch (error) {
      navigate('/404');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestFilteredChars();
  }, [searchParams]);

  useEffect(() => {
    getNextPage(String(currentPage), String(filter));
  }, [currentPage]);

  const filters = [
    {
      id: 1,
      title: 'All',
      onClick: () => {
        setCurrentPage(1);
        setFilter('');
        setSearchParams({});
      },
    },
    {
      id: 2,
      title: 'Alive',
      onClick: () => {
        setCurrentPage(1);
        setFilter('Alive');
        setSearchParams({ status: 'alive' });
      },
    },
    {
      id: 3,
      title: 'Dead',
      onClick: () => {
        setCurrentPage(1);
        setFilter('Dead');
        setSearchParams({ status: 'dead' });
      },
    },
    {
      id: 4,
      title: 'Unknown',
      onClick: () => {
        setCurrentPage(1);
        setFilter('Unknown');
        setSearchParams({ status: 'unknown' });
      },
    },
  ];

  const paginationArray = Array.from(Array(totalPages), (_, index) => index + 1);

  return (
    <div className="body">
      <h1 className="body__h1">
        Characters
        <br />
        {filter}
      </h1>
      <div className="body__actions">
        {filters.map(({ id, title, onClick }) => (
          <button
            key={id}
            onClick={onClick}
            className="filter-btn"
          >
            {title}
          </button>
        ))}
      </div>

      <PageSwitcher
        currentPage={currentPage}
        prevPage={() => setCurrentPage(currentPage - 1)}
        nextPage={() => setCurrentPage(currentPage + 1)}
        specificPage={() => currentPage}
        totalPages={totalPages}
      />

      <div className="pagination-buttons">
        {paginationArray.map((el) => (
          <button
            key={el}
            className="pagination-btn"
            onClick={() => {
              setCurrentPage(el);
            }}
          >
            {el}
          </button>
        ))}
      </div>

      <div className="cards">
        {isLoading ? <Loader /> : (

          filteredChars && filteredChars.map(({
            id, name, image, species, status,
          }) => (
            <div className="card" key={id} onClick={() => navigate(`/characters/${id}`)}>
              <div className="card__top">
                <img src={image} alt="selfie" className="card__img" />
              </div>
              <div className="card__bottom">
                <span className="card__name">{name}</span>
                <span className="card__species">{`Species: ${species}`}</span>
                <span className="card__species">{`${status}`}</span>
              </div>
            </div>
          )))}
      </div>

      <PageSwitcher
        currentPage={currentPage}
        prevPage={() => setCurrentPage(currentPage - 1)}
        nextPage={() => setCurrentPage(currentPage + 1)}
        specificPage={() => setCurrentPage(currentPage)}
        totalPages={totalPages}
      />

    </div>
  );
};

export default Characters;
