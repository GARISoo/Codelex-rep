import './cards.scss';
import Card from './card';

const Cards = () => (
  <div className="cards">
    <div className="cards__row1">
      <Card
        title="The Shawshank Redemption"
        desc="Two imprisoned men bond over a number of years,
      finding solace and eventual redemption through acts of common decency."
      />
      <Card
        title="Inception"
        desc="A thief who steals corporate secrets
      through the use of dream-sharing technology is given the inverse task of
      planting an idea into the mind of a C.E.O., but his tragic past may doom
      the project and his team to disaster."
      />
      <Card
        title="Gladiator"
        desc="A former Roman General sets out to exact against the corrupt emperor
        who murdered his family and senthim into slavery."
      />
    </div>
    <div className="cards__row2">
      <Card
        title="The Intouchables"
        desc="After he becomes a quadriplegic from a paragliding accident,
      an aristocrat hires a young man from the projects to be his caregiver."
      />
      <Card
        title="Pulp Fiction"
        desc="The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair
      of diner bandits intertwine in four tales of violence and redemption."
      />
      <Card
        title="A Beautiful Mind"
        desc="After John Nash, a brilliant but asocial mathematician,
      accepts secret work in cryptography, his life takes a turn for the nightmarish."
      />
    </div>
  </div>
);

export default Cards;
