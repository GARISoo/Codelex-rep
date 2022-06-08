/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type SinglePokemonResponse = {
  moves: {
        'move': {
          'name': string,
          'url': string,
        }
      }[],
  name: string,
  id: number,
  weight: number,
  height: number,
}

type AllPokemonResponse = {
  count: number
  next: string
  previous: null | string
  results: {
    name: string,
    url: string,
  }[]
}

type PokemonMovesResponse = {
  accuracy: number,
  power: number,
  id: number,
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<SinglePokemonResponse, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemon: builder.query<AllPokemonResponse, number>({
      query: (start) => `pokemon?offset=${start}&limit=25`,
    }),
    getMovesInfo: builder.query<PokemonMovesResponse, string>({
      query: (id) => `move/${id}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetPokemonQuery, useGetMovesInfoQuery } = pokemonApi;

export default pokemonApi;
