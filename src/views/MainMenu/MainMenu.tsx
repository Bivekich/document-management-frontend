import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.scss';

const MainMenu: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const user = {
    name: 'Данилов Лев Ильич',
    status: 'Администратор',
  };

  const isAdmin = true;

  const navigateTo = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="main-menu-container">
      <div className="main-menu">
        <div className="user-info">
          <p className="user-name">{user.name}</p>
          <p className="user-status">{user.status}</p>
        </div>
        <div className="menu-buttons">
          <button
            onClick={() => navigateTo('/profile')}
            className="menu-button"
          >
            <span className="icon">👤</span>
            <div className="description">Профиль пользователя</div>
          </button>
          <button onClick={() => navigateTo('/stats')} className="menu-button">
            <span className="icon">📊</span>
            <div className="description">Статистика</div>
          </button>
          <button
            onClick={() => navigateTo('/propose-upload')}
            className="menu-button"
          >
            <span className="icon">📥</span>
            <div className="description">Предложить загрузку</div>
          </button>
          <button
            onClick={() => navigateTo('/download-files')}
            className="menu-button"
          >
            <span className="icon">⬆️</span>
            <div className="description">Сделать загрузку</div>
          </button>
          <button onClick={() => navigateTo('/orders')} className="menu-button">
            <span className="icon">🛒</span>
            <div className="description">Заказы</div>
          </button>
          <button
            onClick={() => navigateTo('/downloads')}
            className="menu-button"
          >
            <span className="icon">⬇️</span>
            <div className="description">Скачали</div>
          </button>
          <button
            onClick={() => navigateTo('/payments')}
            className="menu-button"
          >
            <span className="icon">💳</span>
            <div className="description">Оплата</div>
          </button>
          {isAdmin && (
            <>
              <button
                onClick={() => navigateTo('/approval')}
                className="menu-button admin-button"
              >
                <span className="icon">🔍</span>
                <div className="description">Посмотреть предложения</div>
              </button>
              <button
                onClick={() => navigateTo('/offer-download')}
                className="menu-button admin-button"
              >
                <span className="icon">📂</span>
                <div className="description">Предложить скачать юзеру</div>
              </button>
            </>
          )}
          <button onClick={handleLogout} className="menu-button logout-button">
            <span className="icon">🚪</span>
            <div className="description">Выйти</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
