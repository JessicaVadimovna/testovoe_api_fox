import React from 'react';
import './App.css'; // Импортируем стили для приложения
import CardList from './components/CardList'; // Импортируем компонент списка карточек
import FilterButton from './components/FilterButton'; // Импортируем компонент кнопки фильтра

// Главный компонент приложения
function App() {
  return (
    <div className="App">
      <h1>Фотогалерея лисичек</h1> 
      <FilterButton /> 
      <CardList /> 
    </div>
  );
}

export default App;
