import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.scss';

interface RegistrationForm {
  fullName: string;
  address: string;
  phone: string;
  password: string;
  agreedToTerms: boolean;
}

const Registration: React.FC = () => {
  const [form, setForm] = useState<RegistrationForm>({
    fullName: '',
    address: '',
    phone: '',
    password: '',
    agreedToTerms: false,
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, type, value, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.agreedToTerms) {
      alert('Вы должны согласиться с правилами сервиса.');
      return;
    }

    alert('Форма регистрации отправлена!');
    setForm({
      fullName: '',
      address: '',
      phone: '',
      password: '',
      agreedToTerms: false,
    });
    navigate('/login');
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h1>Регистрация</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">ФИО</label>
            <input
              id="fullName"
              type="text"
              placeholder="Введите ваше ФИО"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Адрес</label>
            <input
              id="address"
              type="text"
              placeholder="Введите ваш адрес"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Номер телефона</label>
            <input
              id="phone"
              type="tel"
              placeholder="Введите ваш номер телефона"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              type="password"
              placeholder="Введите ваш пароль"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="terms-group">
            <input
              id="agreedToTerms"
              type="checkbox"
              checked={form.agreedToTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="agreedToTerms" className="terms-label">
              Согласен с правилами сервиса
            </label>
          </div>

          <button type="submit">Зарегистрироваться</button>
        </form>
        <p className="info-message">
          Вы уже зарегистрированы? <a href="/login">Перейдите к авторизации</a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
