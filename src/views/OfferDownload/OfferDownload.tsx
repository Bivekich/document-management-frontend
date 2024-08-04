import React, { useState } from 'react';
import './OfferDownload.scss';

interface FileOption {
  id: number;
  fileName: string;
}

const fileOptions: FileOption[] = [
  { id: 1, fileName: 'Документ 1' },
  { id: 2, fileName: 'Документ 2' },
  { id: 3, fileName: 'Документ 3' },
];

const OfferDownload: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!phoneNumber || selectedFile === null) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }
    alert(
      `Файл с ID ${selectedFile} предложен пользователю с номером ${phoneNumber}.`
    );
    setPhoneNumber('');
    setSelectedFile(null);
  };

  return (
    <div className="propose-file-page-container">
      <div className="propose-file-form">
        <h1>Предложить файл пользователю</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phone">Номер телефона:</label>
            <input
              id="phone"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+7 (123) 456-78-90"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="file">Выберите файл:</label>
            <select
              id="file"
              value={selectedFile ?? ''}
              onChange={(e) => setSelectedFile(Number(e.target.value))}
              required
            >
              <option value="">Выберите файл</option>
              {fileOptions.map((file) => (
                <option key={file.id} value={file.id}>
                  {file.fileName}
                </option>
              ))}
            </select>
          </div>

          <button type="submit">Предложить</button>
        </form>
      </div>
    </div>
  );
};

export default OfferDownload;
