import React from 'react';
import './Downloads.scss';

interface Download {
  id: number;
  documentName: string;
  downloadCount: number;
}

const Downloads: React.FC = () => {
  const downloads: Download[] = [
    { id: 1, documentName: 'Документ 1', downloadCount: 3 },
    { id: 2, documentName: 'Документ 2', downloadCount: 5 },
    { id: 3, documentName: 'Документ 3', downloadCount: 2 },
  ];

  return (
    <div className="downloads-page-container">
      <div className="downloads-table">
        <h1>История скачиваний</h1>
        <table>
          <thead>
            <tr>
              <th>Название документа</th>
              <th>Количество скачиваний</th>
            </tr>
          </thead>
          <tbody>
            {downloads.map((download) => (
              <tr key={download.id}>
                <td>{download.documentName}</td>
                <td>{download.downloadCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Downloads;
