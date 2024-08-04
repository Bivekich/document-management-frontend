import React, { useState } from 'react';
import './Approval.scss';

interface FileProposal {
  id: number;
  fileName: string;
  price: number;
}

const Approval: React.FC = () => {
  const [files] = useState<FileProposal[]>([
    { id: 1, fileName: 'Документ 1', price: 500 },
    { id: 2, fileName: 'Документ 2', price: 300 },
    { id: 3, fileName: 'Документ 3', price: 450 },
  ]);

  const approveFile = (fileId: number, approved: boolean) => {
    alert(`Файл с ID ${fileId} ${approved ? 'одобрен' : 'отклонен'}.`);
  };

  return (
    <div className="approval-page-container">
      <div className="approval-table">
        <h1>Одобрение файлов</h1>
        <table>
          <thead>
            <tr>
              <th>Название файла</th>
              <th>Цена</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id}>
                <td>{file.fileName}</td>
                <td>{file.price} ₽</td>
                <td>
                  <button
                    onClick={() => approveFile(file.id, true)}
                    className="approve-button"
                  >
                    Одобрить
                  </button>
                  <button
                    onClick={() => approveFile(file.id, false)}
                    className="reject-button"
                  >
                    Отклонить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Approval;
