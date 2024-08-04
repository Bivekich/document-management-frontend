import React, { useState, ChangeEvent, FormEvent } from 'react';
import './DownloadFiles.scss';

interface File {
  id: number;
  name: string;
  date: string;
}

const initialFiles: File[] = [
  { id: 1, name: 'Документ 1', date: '2024-08-01' },
  { id: 2, name: 'Документ 2', date: '2024-08-02' },
  { id: 3, name: 'Документ 3', date: '2024-08-03' },
];

const DownloadFiles: React.FC = () => {
  const [files] = useState<File[]>(initialFiles);
  const [selectedFiles, setSelectedFiles] = useState<number[]>([]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const isButtonEnabled = selectedFiles.length > 0 && agreedToTerms;

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(e.target.value, 10);
    setSelectedFiles((prev) =>
      e.target.checked ? [...prev, id] : prev.filter((fileId) => fileId !== id)
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isButtonEnabled) {
      alert('Пожалуйста, выберите файлы и согласитесь с условиями.');
      return;
    }
    alert('Файлы будут скачаны!');
  };

  return (
    <div className="download-page-container">
      <div className="download-form">
        <h1>Скачивание файлов</h1>
        <form onSubmit={handleSubmit}>
          <table className="file-table">
            <thead>
              <tr>
                <th>Название файла</th>
                <th>Дата покупки</th>
                <th>Выбрать</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.id}>
                  <td>{file.name}</td>
                  <td>{file.date}</td>
                  <td>
                    <input
                      type="checkbox"
                      value={file.id}
                      checked={selectedFiles.includes(file.id)}
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="terms-group">
            <input
              id="terms"
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            <label htmlFor="terms" className="terms-label">
              Согласен с условиями
            </label>
          </div>

          <button type="submit" disabled={!isButtonEnabled}>
            Скачать
          </button>
        </form>
      </div>
    </div>
  );
};

export default DownloadFiles;
