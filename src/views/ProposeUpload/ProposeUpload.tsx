import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProposeUpload.scss';

interface ProposeUploadForm {
  fileName: string;
  amount: number;
  cardNumber: string;
  agreedToTerms: boolean;
}

const ProposeUpload: React.FC = () => {
  const [form, setForm] = useState<ProposeUploadForm>({
    fileName: '',
    amount: 0,
    cardNumber: '',
    agreedToTerms: false,
  });

  const navigate = useNavigate();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      console.log('Файл выбран:', input.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.agreedToTerms) {
      alert('Вы должны согласиться с офертой.');
      return;
    }

    alert('Предложение загружено!');
    setForm({ fileName: '', amount: 0, cardNumber: '', agreedToTerms: false });
    navigate('/');
  };

  return (
    <div className="propose-upload-container">
      <div className="propose-upload-form">
        <h1>Предложить загрузку</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="file">Файл</label>
            <input id="file" type="file" onChange={handleFileChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="fileName">Имя файла</label>
            <input
              id="fileName"
              type="text"
              placeholder="Введите имя файла"
              value={form.fileName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Сумма</label>
            <input
              id="amount"
              type="number"
              placeholder="Введите сумму"
              value={form.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Номер карты</label>
            <input
              id="cardNumber"
              type="text"
              placeholder="Введите номер карты"
              value={form.cardNumber}
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
              Согласен с офертой
            </label>
          </div>

          <button type="submit">Предложить</button>
        </form>
      </div>
    </div>
  );
};

export default ProposeUpload;
