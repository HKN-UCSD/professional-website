import React from 'react';
import Statistic from './Statistic';
import './styles/Statistic.css';

const VerticalDivider = () => (
  <div className="vertical-divider" />
);

const StatisticsSection = () => (
  <div className="statistics-container">
    
        <Statistic 
            label="Active Members" 
            end={500} 
        />

        <VerticalDivider />

        <Statistic 
            label="Hard Hack Attendees" 
            end={200} 
        />

        <VerticalDivider />

        <Statistic 
            label="Projects Completed" 
            end={75} 
        />

        <VerticalDivider />

        <Statistic 
            label="Another Stat" 
            end={85} 
        />
  </div>
);

export default StatisticsSection;