import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const Portfolio = () => {
  const data = {
    labels: ['Bajaj Finserv', 'Shriram Finance', 'Mahindra Finance', 'Utkarsh Small Finance Bank'],
    datasets: [
      {
        data: [25, 20, 15, 40],
        backgroundColor: ['#6C63FF', '#FA9D17', '#B9C606', '#59CBD3'],
      },
    ],
  };

  return (
    <div className="portfolio-chart">
      <h2>Your FD Portfolio</h2>
      <select>
        <option>Deposit Amt</option>
      </select>
      <div className="chart">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Portfolio;