import React, { useContext } from 'react'
import { SpiderContext } from '../context/context';
import "./Caza.scss"
const Caza = () => {
  const { heroes } = useContext(SpiderContext);

  return (
    <div className='padrevacio'>
    {heroes.map((hero) => (
        <div className='vacio'>
            <p>.</p>
        </div>
      ))}</div>
  )
}

export default Caza