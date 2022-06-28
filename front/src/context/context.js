import React, { useState, useEffect, createContext } from 'react';

export const SpiderContext = createContext();

const BASEURL = 'http://localhost:5000';

export const SpiderContextProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [villans, setVillans] = useState([]);



  useEffect(() => {
    const getHeroes = async () => {
      const heroesAPI = await fetch(`${BASEURL}/hero/get`);
      const heroesJSON = await heroesAPI.json();
      setHeroes(heroesJSON.data.heroes);
      console.log(heroesJSON);
    };
    getHeroes()
    ;
  }, []);

  useEffect(() => {
    const getVillans = async () => {
      const villansAPI = await fetch(`${BASEURL}/villan/get`);
      const villansJSON = await villansAPI.json();
      setVillans(villansJSON.data.villans);
    };
    getVillans();
  }, []);


  return (
    <SpiderContext.Provider value={{ heroes, villans, }}>
      {children}
    </SpiderContext.Provider>
  );
};
