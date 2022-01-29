import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

  const {data, loading} = useFetchGifs(category);
  
  return (
    <>
    {(loading) && 'Cargando...'}
      <p>{category}</p><br />
      <div className="card-grid">
        {
          data.map((item) => (
            <GifGridItem key={item.id} {...item} />
          ))
        }
      </div>
    </>
  );
};

export default GifGrid;
