import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/cardsSlice';

const FilterButton = () => {
  const dispatch = useDispatch(); // Получаем функцию dispatch из хука useDispatch
  const filter = useSelector(state => state.cards.filter); // Извлекаем текущее состояние фильтра из store

  return (
    <button 
      className="filter-button"
      onClick={() => dispatch(setFilter(filter === 'all' ? 'liked' : 'all'))}
    >
      {filter === 'all' ? 'Показать избранные' : 'Показать всё'}
    </button>
  );
};

export default FilterButton;