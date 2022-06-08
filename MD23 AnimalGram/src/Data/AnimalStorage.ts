export type AnimalsType = {
    name?: string,
    img?: string,
    species?: string,
};

export const checkIfValidUrl = (url: string) => {
  const pattern = new RegExp('^(https?:\\/\\/)?' // protocol
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
    + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
    + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
    + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
    + '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(url);
};

const randomCards = [
  {
    name: 'Angel',
    img: 'https://www.randomlists.com/img/animals/ground_hog.webp',
    species: 'Ground Hog',
  },
  {
    name: 'Ginger',
    img: 'https://www.randomlists.com/img/animals/warthog.webp',
    species: 'Warthog',
  },
  {
    name: 'Porter',
    img: 'https://www.randomlists.com/img/animals/mongoose.webp',
    species: 'Mongoose',
  },
  {
    name: 'Dexter',
    img: 'https://www.randomlists.com/img/animals/lemur.webp',
    species: 'Lemur',
  },
  {
    name: 'Maximus',
    img: 'https://www.randomlists.com/img/animals/polar_bear.webp',
    species: 'Polar Bear',
  },
  {
    name: 'Tucker',
    img: 'https://www.randomlists.com/img/animals/grizzly_bear.webp',
    species: 'Grizzly Bear',
  },
  {
    name: 'Otis',
    img: 'https://www.randomlists.com/img/animals/puma.webp',
    species: 'Puma',
  },
  {
    name: 'Harold',
    img: 'https://www.randomlists.com/img/animals/ermine.webp',
    species: 'Ermine',
  },
  {
    name: 'Jax',
    img: 'https://www.randomlists.com/img/animals/pony.webp',
    species: 'Pony',
  },
  {
    name: 'Bentley',
    img: 'https://www.randomlists.com/img/animals/burro.webp',
    species: 'Burro',
  },
  {
    name: 'Zoey',
    img: 'https://www.randomlists.com/img/animals/chimpanzee.webp',
    species: 'Chimpanzee',
  },
  {
    name: 'Marley',
    img: 'https://www.randomlists.com/img/animals/canary.webp',
    species: 'Canary',
  },
  {
    name: 'Raven',
    img: 'https://www.randomlists.com/img/animals/toad.webp',
    species: 'Toad',
  },
  {
    name: 'Rufy',
    img: 'https://www.randomlists.com/img/animals/anteater.webp',
    species: 'Anteater',
  },
  {
    name: 'Samson',
    img: 'https://www.randomlists.com/img/animals/buffalo.webp',
    species: 'Buffalo',
  },
  {
    name: 'Rufus',
    img: 'https://www.randomlists.com/img/animals/hippopotamus.webp',
    species: 'Hippopotamus',
  },
  {
    name: 'Zara',
    img: 'https://www.randomlists.com/img/animals/ferret.webp',
    species: 'Ferret',
  },
  {
    name: 'Scooter',
    img: 'https://www.randomlists.com/img/animals/peccary.webp',
    species: 'Peccary',
  },
  {
    name: 'Rusty',
    img: 'https://www.randomlists.com/img/animals/alpaca.webp',
    species: 'Alpaca',
  },
  {
    name: 'Marley',
    img: 'https://www.randomlists.com/img/animals/puppy.webp',
    species: 'Puppy',
  },
];

export const getRandomCard = () => randomCards[Math.floor(Math.random() * randomCards.length)];
