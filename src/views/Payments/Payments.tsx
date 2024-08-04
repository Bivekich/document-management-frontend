// src/views/Payments.tsx
import React, { useState } from 'react';
import './Payments.scss';

interface Payment {
  id: number;
  fileName: string;
  purchaseDate: string;
  isPaid: boolean;
  receipt?: string;
}

const initialPayments: Payment[] = [
  {
    id: 1,
    fileName: 'Документ 1',
    purchaseDate: '2024-07-30',
    isPaid: true,
    receipt: 'Чек №12345',
  },
  {
    id: 2,
    fileName: 'Документ 2',
    purchaseDate: '2024-07-31',
    isPaid: false,
    receipt: '',
  },
  {
    id: 3,
    fileName: 'Документ 3',
    purchaseDate: '2024-08-01',
    isPaid: true,
    receipt: 'Чек №67890',
  },
];

const Payments: React.FC = () => {
  const [payments] = useState<Payment[]>(initialPayments);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

  const selectPayment = (payment: Payment) => {
    setSelectedPayment(payment);
  };

  const closeDetails = () => {
    setSelectedPayment(null);
  };

  const handlePayment = () => {
    if (selectedPayment) {
      alert('Платеж завершен!');
      setSelectedPayment((prev) => (prev ? { ...prev, isPaid: true } : null));
    }
  };

  return (
    <div className="payments-page-container">
      <div className="payments-table">
        <h1>История оплат</h1>
        <table>
          <thead>
            <tr>
              <th>Название файла</th>
              <th>Дата покупки</th>
              <th>Статус</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment.id}
                onClick={() => selectPayment(payment)}
                className="payment-row"
              >
                <td>{payment.fileName}</td>
                <td>{payment.purchaseDate}</td>
                <td>
                  <span className={payment.isPaid ? 'paid' : 'unpaid'}>
                    {payment.isPaid ? '✔️ Оплачено' : '❌ Не оплачено'}
                  </span>
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      selectPayment(payment);
                    }}
                  >
                    Просмотреть чек
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedPayment && (
          <div className="payment-details">
            <h2>Детали оплаты</h2>
            <div className="detail-info">
              <p>
                <strong>Название файла:</strong> {selectedPayment.fileName}
              </p>
              <p>
                <strong>Дата покупки:</strong> {selectedPayment.purchaseDate}
              </p>
              <p>
                <strong>Статус:</strong>
                <span className={selectedPayment.isPaid ? 'paid' : 'unpaid'}>
                  {selectedPayment.isPaid ? '✔️ Оплачено' : '❌ Не оплачено'}
                </span>
              </p>
            </div>
            {selectedPayment.receipt && (
              <div className="receipt">
                <h3>Чек:</h3>
                <pre>{selectedPayment.receipt}</pre>
              </div>
            )}
            {!selectedPayment.isPaid && (
              <div className="payment-actions">
                <button className="pay-button" onClick={handlePayment}>
                  Оплатить
                </button>
              </div>
            )}
            <button className="close-button" onClick={closeDetails}>
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payments;
