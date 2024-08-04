import React, { useState } from 'react';
import './Orders.scss';

interface Order {
  id: number;
  fileName: string;
  uploadDate: string;
  price: number;
  userName: string;
}

const initialOrders: Order[] = [
  {
    id: 1,
    fileName: 'Документ 1',
    uploadDate: '2024-08-01',
    price: 500,
    userName: 'Иванов Иван',
  },
  {
    id: 2,
    fileName: 'Документ 2',
    uploadDate: '2024-08-02',
    price: 300,
    userName: 'Петров Петр',
  },
  {
    id: 3,
    fileName: 'Документ 3',
    uploadDate: '2024-08-03',
    price: 450,
    userName: 'Сидоров Сидор',
  },
];

const Orders: React.FC = () => {
  const [orders] = useState<Order[]>(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);

  const selectOrder = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleBuy = () => {
    if (!agreedToTerms) {
      alert('Пожалуйста, согласитесь с правилами.');
      return;
    }

    alert('Покупка завершена!');
    setSelectedOrder(null);
  };

  return (
    <div className="orders-page-container">
      <div className="orders-table">
        <h1>Заказы</h1>
        <table>
          <thead>
            <tr>
              <th>Файл</th>
              <th>Дата загрузки</th>
              <th>Стоимость</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.fileName}</td>
                <td>{order.uploadDate}</td>
                <td>{order.price} ₽</td>
                <td>
                  <button onClick={() => selectOrder(order)}>
                    Просмотреть
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedOrder && (
          <div className="order-details">
            <h2>Детали заказа</h2>
            <p>
              <strong>Файл:</strong> {selectedOrder.fileName}
            </p>
            <p>
              <strong>Дата загрузки:</strong> {selectedOrder.uploadDate}
            </p>
            <p>
              <strong>Стоимость:</strong> {selectedOrder.price} ₽
            </p>
            <p>
              <strong>Имя пользователя:</strong> {selectedOrder.userName}
            </p>

            <div className="terms-group">
              <input
                id="terms"
                type="checkbox"
                checked={agreedToTerms}
                onChange={() => setAgreedToTerms((prev) => !prev)}
                required
              />
              <label htmlFor="terms" className="terms-label">
                Согласен с правилами
              </label>
            </div>

            <button disabled={!agreedToTerms} onClick={handleBuy}>
              Купить
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
