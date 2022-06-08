/* eslint-disable max-len */
type RatingDetailsProps = {
    rating: number;
    count: number;
}

type EpisodesProps = {
    id: number;
    title: string;
    season: number;
    episode: number;
    released: string;
}

type ShowProps = {
    id: number;
    title: string;
    description: string;
    year: number;
    isPopular: boolean;
    available: boolean;
    ratingDetails: RatingDetailsProps;
    genres: string[];
    episodes: EpisodesProps[];
}

const shows: ShowProps[] = [
  {
    id: 1,
    title: 'Arrow',
    description: 'It is based on the DC Comics character Green Arrow, a costumed crime-fighter',
    year: 2012,
    isPopular: false,
    available: false,
    ratingDetails: {
      rating: 8.1137,
      count: 642,
    },
    genres: ['Drama', 'Action', 'Science-Fiction'],
    episodes: [
      {
        id: 1,
        title: 'Pilot',
        season: 1,
        episode: 1,
        released: '2012-10-11 00:00:00',
      },
      {
        id: 24,
        title: 'City of Heroes',
        season: 2,
        episode: 1,
        released: '2012-10-11 00:00:00',
      },
    ],
  },
  {
    id: 2,
    title: 'Bouncers',
    description: 'Series following the brave people who keep the peace at night.',
    year: 2019,
    isPopular: true,
    available: false,
    ratingDetails: {
      rating: 6.532,
      count: 583,
    },
    genres: ['Lifestyle', 'Drama'],
    episodes: [
      {
        id: 1,
        title: 'Episode 5',
        season: 1,
        episode: 5,
        released: '2019-08-28 23:00:00',
      },
      {
        id: 6,
        title: 'Episode 6',
        season: 1,
        episode: 6,
        released: '2019-08-28 23:00:00',
      },
    ],
  },
  {
    id: 3,
    title: 'Supernatural',
    description: 'Two brothers follow their father\'s footsteps as hunters, fighting evil supernatural beings',
    year: 2005,
    isPopular: true,
    available: false,
    ratingDetails: {
      rating: 9.995,
      count: 50,
    },
    genres: ['Fantasy', 'Drama'],
    episodes: [
      {
        id: 2,
        title: 'Wendigo',
        season: 1,
        episode: 2,
        released: '2005-09-20 23:00:00',
      },
    ],
  },
];

// map()

// 1.Get an array of all titles
// const allTitles = shows.map(({ title }) => title);
// console.log(allTitles);

// 2.Get an array of ids
// const allIds = shows.map(({ id }) => id);
// console.log(allIds);

// 3. Get an array of ratings
// const allRatings = shows.map(({ ratingDetails }) => ratingDetails.rating);
// console.log(allRatings);

// 4. Get an array of ratings rounded to 2 decimal places
// const allRatingsRounded = shows.map(({ ratingDetails }) => ratingDetails.rating.toFixed(2));
// console.log(allRatingsRounded);

// 5. Capitalise all genres
// eslint-disable-next-line max-len
// const allGenreCap = shows.map((show) => ({ ...show, genres: show.genres.map((genre) => genre.toUpperCase()) }));
// console.log(allGenreCap);

// 6. Double all ratingDetails.count
// const allRatingsDoubled = shows.map((show) => ({
//   ...show,
//   ratingDetails:
//   { ...show.ratingDetails, count: show.ratingDetails.count * 2 },
// }));
// console.log(allRatingsDoubled);

// 7. Round all ratings to 2 decimal places
// const changeRatingsRounded = shows.map((show) => ({
//   ...show,
//   ratingDetails:
//   { ...show.ratingDetails, rating: show.ratingDetails.rating.toFixed(2) },
// }));
// console.log(changeRatingsRounded);

// 8. map() each object to only have id, title, description - šo es piemirsu, bet te vnk skip spread
// const onlyIdtitleDesc = shows.map(({ id, title, description }) => ({ id, title, description }));
// console.log(onlyIdtitleDesc);

// 9. If id === 1, change rating to 9.9999
// const updatedRating = shows.map((show) => (
//   show.id === 1 ? { ...show, ratingDetails: { ...show.ratingDetails, rating: 9.9999 } } : show));
// console.log(updatedRating);

// 10. If id === 2, change rating to 8 and add + 1 to rating count
// const newRating = shows.map((show) => (
//   show.id === 2 ? {
//     ...show,
//     ratingDetails: { ...show.ratingDetails, rating: 8, count: show.ratingDetails.count + 1 },
//   }
//     : show));
// console.log(newRating);

// 11. If rating > 7, change isPopular value to true
// const makeShowPopular = shows.map((show) => (
//   show.ratingDetails.rating > 7 ? { ...show, isPopular: true } : show));
// console.log(makeShowPopular);

// 12. If isPopular === true, change rating to 10
// const makeRatingTen = shows.map((show) => (
//   show.isPopular === true ? {
//     ...show,
//     ratingDetails:
//     { ...show.ratingDetails, rating: 10 },
//   } : show));
// console.log(makeRatingTen);

// 13. If genres include 'Science-Fiction', change available to true
// const scienceFictionAvailability = shows.map((show) => (
//   show.genres.includes('Science-Fiction') ? { ...show, available: true } : show));
// console.log(scienceFictionAvailability);

// 14. If isPopular === true, map() episodes, to be an array of episode ids,
// else make episodes an empty []
// const popularEpisodes = shows.map((show) => (
//   show.isPopular === true ? show.episodes.flatMap(({ id }) => ({ id })) : []));
// console.log(popularEpisodes);

// 15. Get an array of all possible genres (not [['', ''], ['']] but ['', '', ''])
// const possibleGenres = [...new Set(shows.flatMap(({ genres }) => genres))];
// console.log(possibleGenres);

// 16. If year > 2016 and isPopular === true, add 'Documentary' to genres
// const addDocumentaryGenre = shows.map((show) => (
//   (show.year > 2016 && show.isPopular === true) ? { ...show, genres: [...show.genres, 'Documentary'] }
//     : show));
// console.log(addDocumentaryGenre);

// 17. If id === 1 and episode id === 24, change episode releaseDate to '2022-10-12 00:00:00'
// const changeReleaseDate = shows.map((show) => (
//   show.id === 1 ? {
//     ...show,
//     episodes: show.episodes.map((episode) => (
//       episode.id === 24 ? { ...episode, released: '2022-10-12 00:00:00' } : episode)),
//   } : show));
// console.log(changeReleaseDate);

// filter()
// 18. Get all shows, where rating < 7
// const showsBelowSeven = shows.filter(({ ratingDetails }) => ratingDetails.rating < 7);
// console.log(showsBelowSeven);

// 19. Get all shows, where description includes "DC"
// const dcShows = shows.filter(({ description }) => description.includes('DC'));
// console.log(dcShows);

// 20. Get all shows, where isPopular === true
// const onlyPopularShows = shows.filter(({ isPopular }) => isPopular);
// console.log(onlyPopularShows);

// 21. Get all shows, where genres include Drama
// const dramaShows = shows.filter(({ genres }) => genres.includes('Drama'));
// console.log(dramaShows);

// 22. Get all shows, where episode array length >= 2
// const veryLongShows = shows.filter(({ episodes }) => episodes.length >= 2);
// console.log(veryLongShows);

// 23. Get all shows, where episode title is Wendigo
// const theWendigoEpisode = shows.filter(({ episodes }) => (
//   episodes.every((episode) => episode.title === 'Wendigo')));
// console.log(theWendigoEpisode);

// 24. Get all shows, where year is < 2019
// const bitOldShows = shows.filter(({ year }) => year < 2019);
// console.log(bitOldShows);

// 25. Get all shows, where title starts with Sup
// const showStartsWithSup = shows.filter(({ title }) => title.includes('Sup'));
// console.log(showStartsWithSup);

// 26. Get all shows, where id === 2
// const showById = shows.filter(({ id }) => id === 2);
// console.log(showById);

// 27. Get all shows, where id !== 2
// const showsBesidesOne = shows.filter(({ id }) => id !== 2);
// console.log(showsBesidesOne);

// 28. Get all episodes, where genres include "Drama" and rating > 7
// const goodDramaEps = shows.filter(({ genres, ratingDetails }) => (
//   genres.includes('Drama') && ratingDetails.rating > 7)).flatMap(({ episodes }) => episodes);
// console.log(goodDramaEps);
