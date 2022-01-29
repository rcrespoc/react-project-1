import React from 'react';

const GifGridItem = ({id, title, url}) => {
  return (
    <div className='card animate__animated animate__bounce'>
      <h3>{title}</h3>
      <img src={url} alt={title} />
    </div>
  );
};

export default GifGridItem;
