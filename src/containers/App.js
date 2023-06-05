import './App.css';
import React, { useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

async function GetRobots() {
  let resp = await fetch('https://jsonplaceholder.typicode.com/users');
  let robots = await resp.json();
  if (robots === undefined) {
    return [];
  } else {
    return robots;
  }
}

const robo = GetRobots(); 

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState('');

  if (robots === undefined || robots.length === 0) {
    robo.then(users => {
        setRobots(
          ...robots,
          users.map(user => {
            return user
          })
        );
      });
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  return ( 
    !robots.length ?
      <h1>Loading</h1> :  
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )    
  )
};

export default App;