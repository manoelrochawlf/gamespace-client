import { useState, useEffect } from 'react'
import { GamesServices } from 'services/GamesServices';
import { GendersServices } from 'services/GendersService';
import { IGames } from 'services/GamesServices';
import { IGenders } from 'services/GendersService';
import CarouselCards from './carousel';

export const CardGame = () => {
  const [games, setGames] = useState<IGames[]>([
    {
      id: "",
      Title: "",
      CoverImageUrl: "",
      Description: "",
      Year: 0,
      ImdbScore: 0,
    },
  ]);
  useEffect(() => {
    renderGames();
  }, []);

  const [genders, setGenders] = useState<IGenders[]>([
    {
      id: "",
      name: "",
    },
  ]);
  useEffect(() => {
    renderGenders();
  }, []);

  const renderGames = async () => {
    const res = await GamesServices.getAll();
    setGames(res?.data);
  };
  const renderGenders = async () => {
    const res = await GendersServices.getAll();
    setGenders(res?.data);
  };

      

  return (
        <>
           <CarouselCards data={games} dataz={genders}/>
      </>          
  )
}

