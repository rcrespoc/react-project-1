import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('Hello World!');
  const ref = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories(cats => [ref.current.value,...cats]);
    setInputValue('');
  }

  return (
      <form
        onSubmit={handleSubmit}
      >
        <input 
          ref={ref}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}