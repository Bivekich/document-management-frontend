import React, { useState } from 'react';
import './UserProfile.scss';

interface UserProfile {
  fullName: string;
  address: string;
  phone: string;
  email: string;
}

const initialProfile: UserProfile = {
  fullName: 'Иван Иванов',
  address: 'Москва, ул. Ленина, д. 1',
  phone: '+7 900 000 00 00',
  email: 'ivan.ivanov@example.com',
};

const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Здесь можно добавить логику для сохранения изменений (например, отправить данные на сервер)
    setIsEditing(false);
  };

  return (
    <div className="user-profile-container">
      <div className="user-profile-card">
        <h1>Профиль пользователя</h1>
        <div className="profile-details">
          <div className="profile-item">
            <label htmlFor="fullName">ФИО</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={profile.fullName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profile-item">
            <label htmlFor="address">Адрес</label>
            <input
              id="address"
              name="address"
              type="text"
              value={profile.address}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profile-item">
            <label htmlFor="phone">Номер телефона</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={profile.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profile-item">
            <label htmlFor="email">Электронная почта</label>
            <input
              id="email"
              name="email"
              type="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profile-actions">
            {isEditing ? (
              <>
                <button onClick={handleSave}>Сохранить</button>
                <button onClick={() => setIsEditing(false)}>Отмена</button>
              </>
            ) : (
              <button onClick={() => setIsEditing(true)}>Редактировать</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
