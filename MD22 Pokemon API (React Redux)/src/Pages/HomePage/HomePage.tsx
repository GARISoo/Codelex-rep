import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetPokemonQuery } from '../../ReduxSlices/Pokemon';
import store, { RootState } from '../../store';

const HomePage = () => {
  const [pokemonAmount, setPokemonAmount] = useState(0);
  const {
    data, isFetching, isError, isSuccess,
  } = useGetPokemonQuery(pokemonAmount);
  const navigate = useNavigate();
  const img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  return (
    <div>
      <div className="buttons">
        <button
          onClick={() => setPokemonAmount(pokemonAmount - 25)}
          disabled={!pokemonAmount}
        >
          Previous
        </button>
        <button onClick={() => setPokemonAmount(pokemonAmount + 25)}>
          Next
        </button>
      </div>
      <div className="homepage">
        {data && data.results.map(({ name, url }) => {
          const arr = url.split('/');
          const id = arr[arr.length - 2];
          return (
            <div
              onClick={() => navigate(`/pokemon/${name}`)}
              className="pokemon__box"
            >
              <img
                src={img.concat(`${id}.png`)}
                alt="test"
                className="pok__img"
              />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
