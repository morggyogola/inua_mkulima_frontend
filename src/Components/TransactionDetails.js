import React, { useState } from 'react';

const TransactionDetails = () => {
  const [transactionId, setTransactionId] = useState('');
  const [transaction, setTransaction] = useState(null);
  const [error, setError] = useState(null);

  const fetchTransaction = async () => {
    try {
      const response = await fetch(`/api/v1/transaction/${transactionId}`);
      if (!response.ok) {
        throw new Error('Transaction not found');
      }
      const data = await response.json();
      setTransaction(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setTransaction(null);
    }
  };

  return (
    <div>
      <h1>Transaction Details</h1>
      <input
        type="text"
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
        placeholder="Enter Transaction ID"
      />
      <button onClick={fetchTransaction}>Get Transaction</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {transaction && (
        <div>
          <h2>Transaction ID: {transaction.id}</h2>
          <p>Farmer: {transaction.farmer.farmerName}</p>
          <p>Product: {transaction.product.productName}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Date: {transaction.transactionDate}</p>
        </div>
      )}
    </div>
  );
};

export default TransactionDetails;