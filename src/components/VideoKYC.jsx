import React from 'react';

const VideoKYC = ({ date, amount, tenure, interest }) => {
  return (
    <div className="video-kyc-card">
      <h3>Video KYC</h3>
      <p>Scheduled On: {date}</p>
      <p>Deposit Amount: Rs. {amount}</p>
      <p>Tenure: {tenure}</p>
      <p>Interest Rate: {interest}</p>
      <button>Complete Now</button>
      <button>Reschedule</button>
    </div>
  );
};
export default VideoKYC;

