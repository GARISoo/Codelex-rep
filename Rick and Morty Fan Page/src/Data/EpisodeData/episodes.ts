/* eslint-disable camelcase */
/* eslint-disable max-len */
export type EpisodeProps = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    image: string;
    characters: any[];
    url: string;
    created: string;
    video: string;
}

export type EpisodePreviewProps = {
  id: number,
  image: string,
  video?: string,
}

const episodePreview = [
  {
    id: 1,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/4/4b/S1e1_Rick-and-morty.png/',
    video: 'https://www.youtube.com/embed/qtdCIs6JdXg?list=PLnB5enXU4M7U9b3DN0VKeKJDbH4pbYaVZ',
  },
  {
    id: 2,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/d/d7/Lawnmower_Dog.png/',
    video: 'https://www.youtube.com/embed/gR1WFUP4bvs',
  },
  {
    id: 3,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/d/d3/Anatomy_Park_7.png/',
    video: 'https://www.youtube.com/embed/g00-7nGOI5o',
  },
  {
    id: 4,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/2/2c/Screenshot_2015-09-28_at_7.09.48_PM.png/',
    video: 'https://www.youtube.com/embed/qVpqaac4mZ0',
  },
  {
    id: 5,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/e/e7/Meeseeks_and_Drestroy.png/',
    video: 'https://www.youtube.com/embed/45YvxfCroYg',
  },
  {
    id: 6,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/b/b8/Rick-and-Morty-Season-1-Episode-6-10-4c17.jpg/',
    video: 'https://www.youtube.com/embed/Pjp7qDg-KKk',
  },
  {
    id: 7,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/d/d3/Raising_Gazorpazorp.png/',
    video: 'https://www.youtube.com/embed/Hp0sSgeaW4w',
  },
  {
    id: 8,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/f/fb/Rixty_Minutes_Better_Picture.png/',
    video: 'https://www.youtube.com/embed/Beki0y3znwI',
  },
  {
    id: 9,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/2/2e/Something_Ricked_This_Way_Comes.png/',
    video: 'https://www.youtube.com/embed/ONfWJ7zpERs',
  },
  {
    id: 10,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/e/e6/Amfhioopko7i680t2kzx.jpg/',
    video: 'https://www.youtube.com/embed/V_-XAW1rxvc',
  },
  {
    id: 11,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/1/1b/Ricksy_business_screencap.png/',
    video: 'https://www.youtube.com/embed/wHwDWS3Wq_E',
  },
  {
    id: 12,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/2/29/A_Rickle_in_Time.png/',
    video: 'https://www.youtube.com/embed/lm2BSWjcYvI',
  },
  {
    id: 13,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/e/e0/Mortynight_Run.png/',
    video: 'https://www.youtube.com/embed/1eQo6BDM-VM',
  },
  {
    id: 14,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/1/13/Auto_Erotic_Assimilation.png/',
    video: 'https://www.youtube.com/embed/ASjyZwsNAkc',
  },
  {
    id: 15,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/4/49/Total_Rickall.png/',
    video: 'https://www.youtube.com/embed/nFshapJGw34',
  },
  {
    id: 16,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/0/08/S2e5_outside_church.png/',
    video: 'https://www.youtube.com/embed/I1188GO4p1E',
  },
  {
    id: 17,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/1/17/The_Ricks_Must_be_Crazy.png/',
    video: 'https://www.youtube.com/embed/2sEbe9gveN4',
  },
  {
    id: 18,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/e/e3/Screenshot_2015-09-28_at_8.12.32_AM.png/',
    video: 'https://www.youtube.com/embed/7LhOUoVShhE',
  },
  {
    id: 19,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/a/a1/S2e8_Interdimensional_Cable_2.png/',
    video: 'https://www.youtube.com/embed/U_U2CFhpPzM',
  },
  {
    id: 20,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/e/e6/Look_who%27s_purging_now_HQ.png/',
    video: 'https://www.youtube.com/embed/77jqLe7lA34',
  },
  {
    id: 21,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/2/2f/WeddingSquanchEp.png',
    video: 'https://www.youtube.com/embed/_BffgreoWSw',
  },
  {
    id: 22,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/b/bc/S3e1_RickandBug.png',
    video: 'https://www.youtube.com/embed/x61Lz62Z9WI',
  },
  {
    id: 23,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/5/54/S3e2_specific_rick.png',
    video: 'https://www.youtube.com/embed/qhAU1eoPZRI',
  },
  {
    id: 24,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/2/2e/Pickle_Rick_Episode.jpg',
    video: 'https://www.youtube.com/embed/woC1jzf0EDg',
  },
  {
    id: 25,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/8/82/S3e4_ready_to_go.png',
    video: 'https://www.youtube.com/embed/Hfmz3JzaFYU',
  },
  {
    id: 26,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/9/9b/S3e5_02h19m26s212.png',
    video: 'https://www.youtube.com/embed/Ur0br8mdbcU',
  },
  {
    id: 27,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/8/89/Rms03e06.s29.png',
    video: 'https://www.youtube.com/embed/lV7gT1f6oUc',
  },
  {
    id: 28,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/2/2c/S3e7_Tales_From_the_Citadel.png',
    video: 'https://www.youtube.com/embed/kKBQP3WlckQ',
  },
  {
    id: 29,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/9/98/Rm.s03e08.s05.png',
    video: 'https://www.youtube.com/embed/2ARGjhv3UCE',
  },
  {
    id: 30,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/2/2b/The_ABC_of_Beth.png',
    video: 'https://www.youtube.com/embed/7LhOUoVShhE',
  },
  {
    id: 31,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/a/ad/S3e10_.png',
    video: 'https://www.youtube.com/embed/eNB8fW-S7z0',
  },
  {
    id: 32,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/e/e9/S4e1_morty_pockets_crystal.jpg',
    video: 'https://www.youtube.com/embed/16Ef520H3Ec',
  },
  {
    id: 33,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/6/63/S4e2_morty_smash.png',
    video: 'https://www.youtube.com/embed/MU4WlERyyBY',
  },
  {
    id: 34,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/6/6b/S4e3_random_job_crew.jpg',
    video: 'https://www.youtube.com/embed/6EReTeByPWk',
  },
  {
    id: 35,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/b/b4/S04e04_Claw_and_Hoarder-_Special_Ricktim%27s_Morty.png',
    video: 'https://www.youtube.com/embed/6gprED0rWRk',
  },
  {
    id: 36,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/7/74/S4e5_2019-12-29-14h10m35s619.png',
    video: 'https://www.youtube.com/embed/Dppqv7MlDrc',
  },
  {
    id: 37,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/e/e9/Rick_and_Morty_in_the_Story_Train.png',
    video: 'https://www.youtube.com/embed/nLlXn79inws',
  },
  {
    id: 38,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/e/e5/S4_e7_glorzo.png',
    video: 'https://www.youtube.com/embed/ThP9BLdTBnQ',
  },
  {
    id: 39,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/8/82/S4_e8_vat_of_acid.jpg',
    video: 'https://www.youtube.com/embed/rsNOQP8QoNI',
  },
  {
    id: 40,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/8/8a/S4_e9_ricklet.jpg',
    video: 'https://www.youtube.com/embed/AeDooWMXjoQ',
  },
  {
    id: 41,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/6/65/S4_e10_two_beths.jpg',
    video: 'https://www.youtube.com/embed/4tpwK5sACBk',
  },
  {
    id: 42,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/1/1d/S5_e1_mr_nimbus.jpeg',
    video: 'https://www.youtube.com/embed/FJwI1ESgxxg',
  },
  {
    id: 43,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/b/bf/Everybody_Fights_Themselves.png',
    video: 'https://www.youtube.com/embed/hXVIPNmfJgU',
  },
  {
    id: 44,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/b/b3/We_Can%27t_Drop_the_Curtain.png',
    video: 'https://www.youtube.com/embed/8Jf6DxGB03s',
  },
  {
    id: 45,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/a/a9/Sperm_Attack.png',
    video: 'https://www.youtube.com/embed/fsCiXq6MV4Q',
  },
  {
    id: 46,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/1/1b/Amortycan_grickffiti.PNG',
    video: 'https://www.youtube.com/embed/gyfw7PDbFvQ',
  },
  {
    id: 47,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/a/a7/Rick_and_Morty_Are_Turkeys.png',
    video: 'https://www.youtube.com/embed/xALTFQ70va4',
  },
  {
    id: 48,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/f/f2/Gotron.PNG',
    video: 'https://www.youtube.com/embed/j2Ji6jU2tOY',
  },
  {
    id: 49,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/6/65/Rickternal_friendshine_of_the_spotless_mort.png',
    video: 'https://www.youtube.com/embed/agStMgYESTE',
  },
  {
    id: 50,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/b/b9/Forgetting_sarick_mortshall.PNG',
    video: 'https://www.youtube.com/embed/DEPQD4I_HYw',
  },
  {
    id: 51,
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/0/0a/S5e10_rick_and_two_crows_intro.png',
    video: 'https://www.youtube.com/embed/FMdKUIO3seQ',
  },
];

export const getImages = (id?: number) => episodePreview.find((ep) => ep.id === id);
