/* eslint-disable no-await-in-loop */
import axios from 'axios';

type LocationProps = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}

async function getPageOfResults(page: number) {
  const response = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`);
  return response.data.results;
}

export async function getAllLocations() {
  let locations: LocationProps[] = [];
  let page = 1;
  while (page < 8) {
    const newResults = await getPageOfResults(page);
    page += 1;
    locations = locations.concat(newResults);
  }
  return locations;
}

export default LocationProps;
