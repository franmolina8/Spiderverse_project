import React, { useContext } from 'react';
import { SpiderContext } from '../context/context';
import { Link } from 'react-router-dom';

import './Villans.scss';
const Villans = () => {
  const { villans } = useContext(SpiderContext);

  return (
    <>
      <div className="wp">
        <h1 className='title2'>VILLAINS</h1>
        <div className='spider'>
          {villans.map((villan) => (
            <Link key={villan._id} to={`${villan.name}` }>

            <div className='hijo'>
              <h2> {villan.name}</h2>
              <img src={villan.image} alt={villan.name}></img>
            </div>
            </Link>

          ))}
        </div>
      </div>
    </>
  );
};

export default Villans;
