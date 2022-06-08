import React, { useRef } from 'react';

const ClassWork = () => {
  const boxColor = useRef<HTMLDivElement | null>(null);
  const boxWrapper = useRef<HTMLDivElement | null>(null);
  const boxOriginal = useRef<HTMLDivElement | null>(null);

  const onClick = () => {
    if (boxColor.current) {
      const box = boxColor.current;
      box.style.backgroundColor = 'blue';
    }
  };

  const onClickClone = () => {
    if (boxWrapper.current) {
      const boxWrapperNode = boxWrapper.current;
      if (boxOriginal.current) {
        const boxClone = boxOriginal.current.cloneNode(true);
        boxWrapperNode.appendChild(boxClone);
      }
    }
  };

  return (
    <div className="main">

      <div className="container__box">
        <button onClick={onClick}>Change Color</button>
        <div className="main__box" ref={boxColor}>
          o
        </div>
      </div>

      <div className="container__box">
        <button onClick={onClickClone}>Clone</button>
        <div ref={boxWrapper} className="box__wrapper">
          <div className="main__box" ref={boxOriginal} />
        </div>
      </div>

    </div>
  );
};

export default ClassWork;
