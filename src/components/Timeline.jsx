import React from 'react';

const Timeline = () => {
  return (
    <div className="maturity-timeline">
      <h3>Maturity Timeline</h3>
      <div className="timeline-chart">
        <div className="timeline-row">
          <div className="timeline-label">Jan</div>
          <div className="timeline-bar">
            <div className="timeline-segment utkarsh">Utkarsh</div>
            <div className="timeline-segment shriram">Shriram</div>
            <div className="timeline-segment bajaj">Bajaj</div>
            <div className="timeline-segment mahindra">Mahindra</div>
          </div>
        </div>
        <div className="timeline-row">
          <div className="timeline-label">Feb</div>
          <div className="timeline-bar">
            <div className="timeline-segment utkarsh">Utkarsh</div>
            <div className="timeline-segment shriram">Shriram</div>
            <div className="timeline-segment bajaj">Bajaj</div>
            <div className="timeline-segment mahindra">Mahindra</div>
          </div>
        </div>
        <div className="timeline-row">
          <div className="timeline-label">Mar</div>
          <div className="timeline-bar">
            <div className="timeline-segment utkarsh">Utkarsh</div>
            <div className="timeline-segment shriram">Shriram</div>
            <div className="timeline-segment bajaj">Bajaj</div>
            <div className="timeline-segment mahindra">Mahindra</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
