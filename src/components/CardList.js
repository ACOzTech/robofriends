import React from 'react';
import Card from './Card';

const CardList = ({ robots, roboSet }) => {
  return (
    <div>
      {
        robots.map((robot) => {
          return (
            <Card 
              key={robot.id} 
              id={robot.id} 
              name={robot.name} 
              email={robot.email} 
              roboSet={roboSet}
            />
          );
        })
      }
    </div>
  );
};

export default CardList;