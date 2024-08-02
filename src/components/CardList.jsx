import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '../redux/cardsSlice';
import Card from './Card';

const CardList = () => {
  const dispatch = useDispatch(); // Получаем функцию dispatch из хука useDispatch
  const { items, status, error, filter } = useSelector(state => state.cards);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCards());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Загрузка...</div>;
  if (status === 'failed') return <div>Ошибка: {error}</div>;


// Фильтруем карточки в зависимости от состояния фильтра
  const filteredCards = filter === 'liked' ? items.filter(card => card.liked) : items;

  return (
    <div className="card-list">
      {filteredCards.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardList;