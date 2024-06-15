import React from "react";
import Portfolio from './Portfolio';
import Timeline from './Timeline';
import BankCard from './BankCard';
import VideoKYC from './VideoKYC';
import PaymentCard from './PaymentCard';
import FAQ from './FAQ';

import utkarshLogo from '../assets/utkrash.png';
import bajajLogo from '../assets/bajaj.png';
import shriramLogo from '../assets/shriram.png';
import mahindraLogo from '../assets/mahindra.png';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome, Johan Paul</h1>
      <div className="dashboard-content">
        <div className="left-column">
          <div className="portfolio-and-timeline">
            <Portfolio />
            <Timeline />
          </div>
          <div className="bank-cards">
            <BankCard 
              logo={utkarshLogo}
              title="Utkarsh Small Finance Bank" 
              interest="9.10% p.a" 
              highestRate 
              rbiInsured 
            />
            <BankCard 
              logo={bajajLogo}
              title="Bajaj Finserv" 
              interest="8.80% p.a" 
              crisilRated 
              noVideoKYC 
            />
          </div>
          <div className="bank-cards">
            <BankCard 
              logo={shriramLogo}
              title="Shriram Finance" 
              interest="8.80% p.a" 
              crisilRated 
              noVideoKYC 
            />
            <BankCard 
              logo={mahindraLogo}
              title="Mahindra Finance" 
              interest="8.80% p.a" 
              crisilRated 
              noVideoKYC 
            />
          </div>
        </div>
        <div className="right-column">
          <VideoKYC 
            date="28 Oct, 2023" 
            amount="20,000" 
            tenure="2 Years" 
            interest="9.10%" 
          />
          <div className="payment-cards">
          <PaymentCard 
            type="Pending Payment" 
            date="30 Oct, 2023" 
            amount="25,000" 
            tenure="18 Months" 
            interest="8.10%" 
          />
          <PaymentCard 
            type="Upcoming FD Maturity" 
            date="30 Oct, 2023" 
            amount="25,000" 
            tenure="18 Months" 
            interest="8.10%" 
          />
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default Dashboard;