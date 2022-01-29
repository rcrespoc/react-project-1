import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';



const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

  // const handleAdd = () => {
  //   setCategories([...categories, 'Prueba']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {
        categories.map(item => (
          <GifGrid category={item} key={`categorie-${item}`} />
        ))
      }
    </>
  );
};

export default GifExpertApp;
