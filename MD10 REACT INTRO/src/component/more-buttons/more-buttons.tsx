import './more-buttons.scss';

const buttonDetails = [
  {
    id: '1',
    title: 'Button1',
    backgroundColor: '#92A8D1',
  },
  {
    id: '2',
    title: 'Button2',
    backgroundColor: '#FF6F61',
  },
  {
    id: '3',
    title: 'Button3',
    backgroundColor: '#88B04B',
  },
  {
    id: '4',
    title: 'Button4',
    backgroundColor: '#F7CAC9',
  },
];

type propType = {
    id: string;
    title: string;
    backgroundColor: string;
}

const btn = buttonDetails.map((prop: propType) => (
  <button
    style={{ backgroundColor: prop.backgroundColor }}
    key={prop.id}
    className="mbuttons__btn"
  >
    {prop.title}
  </button>
));

const MButtons = () => (
  <div className="mbuttons">
    {btn}
  </div>
);

export default MButtons;
