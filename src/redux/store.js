import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';

// Конфигурируем store с использованием редьюсера карточек
export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});