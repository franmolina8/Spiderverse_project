import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './SpiderDetail.scss';

const SpiderDetail = () => {
  const { name } = useParams();

  const [spider, setSpider] = useState({});

  useEffect(() => {
    const getSpiderByName = async () => {
      const res = await axios.get(`http://localhost:5000/hero/get/${name}`);
      setSpider(res.data.data.hero[0]);
      console.log(res);
    };
    getSpiderByName();
  });

  return (
    <div>
      {' '}
      {spider ? (
        <>
          <div className='grandpa'>
            <div className='father'>
              <img src={spider.image} alt={spider.name} width='400px' />
              <div className='center'>
                <h2>{spider.name} - {spider.nickname}</h2>

                <p>Universe: {spider.universe}</p>
                <p>Powers: {spider.power}</p>
                <div className='column'>
                  {' '}
                  <Link to={`/spidermans`} className="a">BACK</Link>
                  <img
                    src='https://img.wattpad.com/224ca917b3f86ed179ebd39d1ba88c4ca3d6a11a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f3463495a56706c736f5275374b513d3d2d3839363235373730312e313631346334303238663761353236613936333036353033313239332e676966'
                    alt='gif2'
                    className='gif2'></img>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SpiderDetail;
