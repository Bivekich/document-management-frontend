import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      const token = 'exampleToken123456';

      localStorage.setItem('authToken', token);

      localStorage.setItem('isAuthenticated', 'true');

      navigate('/');
    } else {
      alert('Неверное имя пользователя или пароль');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Вход в систему</h1>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Войти</button>
        <div className="info-message">
          <p>
            Не зарегистрированы? <a href="/register">Зарегистрируйтесь</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
