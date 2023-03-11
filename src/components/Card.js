import React from 'react';

const Card = ({id, name, email, roboSet}) => {
  return (
    <div className='tc bg-light-pink dib br3 ma2 grow bw2 shadow-5'>
      <img alt='robot' src={`https://robohash.org/set_set${roboSet}/${id}?size=300x300`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
