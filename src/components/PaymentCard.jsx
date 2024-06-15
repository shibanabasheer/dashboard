import React from 'react';

const PaymentCard = ({ type, date, amount, tenure, interest }) => {
  return (
    <div className="payment-card">
      <h3>{type}</h3>
      <p>Pay By: {date}</p>
      <p>Deposit Amount: Rs. {amount}</p>
      <p>Tenure: {tenure}</p>
      <p>Interest Rate: {interest}</p>
      {type === 'Pending Payment' ? (
        <>
          <button>Pay Now</button>
          <button>Cancel Application</button>
        </>
      ) : (
        <>
          <button>Renew Now</button>
          <button>Compare other FDs</button>
        </>
      )}
    </div>
  );
};

export default PaymentCard;

