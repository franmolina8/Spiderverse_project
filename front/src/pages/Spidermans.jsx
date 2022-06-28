import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SpiderContext } from '../context/context';
import './Spidermans.scss';

const Spidermans = () => {
  const { heroes } = useContext(SpiderContext);
  console.log(heroes);

  return (
    <div className='padre'>

      <div className='margin'>
        <img src='https://www.pngmart.com/files/12/Spider-Man-Into-The-Spider-Verse-Logo-PNG-Image.png' alt='title' className='title'></img>
        {/* <img
          src='http://pa1.narvii.com/6146/c6a2e4ee11fdc3638b40ed54ec4a5cecbed1020f_00.gif'
          alt='gif'
          className='gif'></img> */}
      </div>
        <div className='spider'>
      {heroes.map((hero) => (
        <Link key={hero._id} to={`${hero.name}` }>
        <div className='hijo'>
          <h2> {hero.name}</h2>
          <img src={hero.image} alt={hero.name}></img>
        </div>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default Spidermans;
