import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const VillanDetail = () => {
    const { name } = useParams();
    const [duende, setDuende] = useState({});
    useEffect(() => {
        const getDuendeByName = async () => {
          const res = await axios.get(`http://localhost:5000/villan/get/${name}`);
          setDuende(res.data.data.villan[0]);
          console.log(res);
        };
        getDuendeByName();
      });

  return (
    <div>
      
      {duende ? (
        <>
          <div className='grandpa'>
            <div className='villandetail'>
              <img src={duende.image} alt={duende.name} width='400px' />
              <div className='center'>
                <h2>{duende.name} - {duende.nickname}</h2>

                <p>Universe: {duende.universe}</p>
                <p>Powers: {duende.power}</p>
                <div className='column'>
                  {' '}
                  <Link to={`/villans`} className="a">BACK</Link>
                  <img
                    src='https://thumbs.gfycat.com/FabulousUnacceptableCaimanlizard-size_restricted.gif'
                    alt='gif2'
                    className='gif2'></img>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default VillanDetail