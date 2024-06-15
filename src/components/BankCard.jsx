import React from 'react';

const BankCard = ({ logo, title, interest, highestRate, rbiInsured, crisilRated, noVideoKYC }) => {
  return (
    <div className="bank-card">
      <div className="bank-logo">
        <img src={logo} alt={`${title} logo`} />
      </div>
      <div className="bank-details">
        <h3>{title}</h3>
        <div className="badges">
          {highestRate && <span className="badge highest-rate">Highest Rate</span>}
          {rbiInsured && <span className="badge rbi-insured">RBI Insured</span>}
          {crisilRated && <span className="badge crisil-rated">Crisil AAA Rated</span>}
          {noVideoKYC && <span className="badge no-video-kyc">No Video KYC required</span>}
        </div>
        <p className="interest-rate">Interest up to {interest}</p>
        <button className="book-now-button">Book Now</button>
      </div>
    </div>
  );
};

export default BankCard;

