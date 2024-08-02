import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLike, removeCard } from '../redux/cardsSlice';

const Card = ({ id, image, info, liked }) => {
  const dispatch = useDispatch(); // Получаем функцию dispatch из хука useDispatch

  return (
    <div className="card">
      <img src={image} alt="Fox" />
      <div className="card-content">
        <p>{info}</p>
        <div className="card-buttons">
          <button 
            className={`card-button like-button ${liked ? 'liked' : ''}`}
            onClick={() => dispatch(toggleLike(id))} // Диспатчим экшен для переключения состояния лайка
          >
            {liked ? '❤️' : '🤍'}
          </button>
          <button 
            className="card-button remove-button"
            onClick={() => dispatch(removeCard(id))} // Диспатчим экшен для удаления карточки
          >
            &#10008;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;