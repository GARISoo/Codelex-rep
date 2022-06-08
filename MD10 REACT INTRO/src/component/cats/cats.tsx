import './cats.scss';
import Cat from './cat';

const pic1 = require('./images/cat1.png');
const pic2 = require('./images/cat2.png');
const pic3 = require('./images/cat3.png');
const pic4 = require('./images/cat4.png');

const Cats = () => (
  <div className="cats">
    <Cat text={pic1} />
    <Cat text={pic2} />
    <Cat text={pic3} />
    <Cat text={pic4} />
  </div>
);

export default Cats;
