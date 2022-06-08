import React, { useState } from 'react';
import '../styles/sharedStyles.scss';

const PicaAdder = () => {
  const [pica, setPica] = useState('');
  return (
    <div className="box">
      <button className="btn" onClick={() => setPica(`${pica} pica`)}>
        Pievienot picu
      </button>
      <button className="btn" onClick={() => setPica('')}>
        Apēst
      </button>
      <div className="result">{`Man garšo: ${pica}`}</div>
    </div>
  );
};

export default PicaAdder;
