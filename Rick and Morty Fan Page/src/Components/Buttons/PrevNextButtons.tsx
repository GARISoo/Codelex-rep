type ButtonProps = {
  backFunction: () => void;
  prevFunction: () => void;
  nextFunction: () => void;
}

const PrevNextButtons = ({ backFunction, prevFunction, nextFunction }: ButtonProps) => {
    type ActionsProps = {
        id: number,
        title: string,
        onClick?: () => void,
    }

    const actions = [
      {
        id: 1,
        title: 'Previous',
        onClick: () => prevFunction(),
      },
      {
        id: 2,
        title: 'See All',
        onClick: () => backFunction(),
      },
      {
        id: 3,
        title: 'Next',
        onClick: () => nextFunction(),
      },
    ];
    return (
      <div className="buttons">
        {actions.map(({ id, title, onClick }: ActionsProps) => (
          <button
            key={id}
            className="next-btn"
            onClick={onClick}
          >
            {title}
          </button>
        ))}
      </div>
    );
};

export default PrevNextButtons;
