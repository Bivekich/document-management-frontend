// src/views/Statistics.tsx
import React, { useState } from 'react';
import './Statistics.scss';

const Statistics: React.FC = () => {
  const [boughtFiles] = useState(10); // Замените на реальное значение
  const [downloadedFiles] = useState(8); // Замените на реальное значение
  const [totalSpent] = useState(1500); // Замените на реальное значение

  return (
    <div className="statistics-page-container">
      <div className="statistics-card">
        <h1>Статистика пользователя</h1>
        <div className="statistics-details">
          <div className="statistic-item">
            <div className="statistic-content">
              <h2>Куплено файлов</h2>
              <p>{boughtFiles}</p>
            </div>
          </div>
          <div className="statistic-item">
            <div className="statistic-content">
              <h2>Скачано файлов</h2>
              <p>{downloadedFiles}</p>
            </div>
          </div>
          <div className="statistic-item">
            <div className="statistic-content">
              <h2>Потрачено рублей</h2>
              <p>{totalSpent} ₽</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
