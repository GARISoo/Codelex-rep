import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPokemonQuery, useGetMovesInfoQuery, useGetPokemonByNameQuery } from '../../ReduxSlices/Pokemon';
import store, { RootState } from '../../store';

const SinglePokemon = () => {
  const [movesDesc, setMovesDesc] = useState(false);
  const { name } = useParams();
  // @ts-ignore
  const { data } = useGetPokemonByNameQuery(name);
  const img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  const getMoveId = () => {
    const newArr = data?.moves[0].move.url.split('/');
    return (
      newArr ? (newArr[newArr?.length - 2]) : ''
    );
  };

  const moves = useGetMovesInfoQuery(getMoveId());

  const checkIfAcc = () => (moves.data?.accuracy ? moves.data?.accuracy : 'No info given');
  const checkIfPow = () => (moves.data?.power ? moves.data?.power : 'No info given');

  return (data ? (
    <div className="pokemon">
      <div className="pokemon__card">
        <h3 className="pokemon__h3">{data.name}</h3>
        <div className="pokemon__portrait">
          <img src={img.concat(`${data.id}.png`)} alt="" className="pokemon__img" />
        </div>
        <div className="pokemon__desc">
          <span>{`Weight: ${data.weight}kg`}</span>
          <span>{`Height: ${data.height}m`}</span>
          <b onClick={() => setMovesDesc(!movesDesc)}>Info About Top Move</b>
        </div>
        {movesDesc ? (
          <div>
            <p>{`Top move: ${data.moves[0].move.name}`}</p>
            <p>{`Accuracy: ${checkIfAcc()}`}</p>
            <p>{`Power: ${checkIfPow()}`}</p>
          </div>
        ) : null}
      </div>
    </div>
  ) : null
  );
};

export default SinglePokemon;
