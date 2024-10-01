import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CalenderComponentChatGpt.scss';

const CalenderComponentChatGpt: React.FC = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today.getDate());
  const [currentMonth, setCurrentMonth] = useState(today.toLocaleString('default', { month: 'long' }));
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = new Date(currentYear, today.getMonth() + 1, 0).getDate();

  const renderDays = () => {
    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === currentDate;
      days.push(
        <Col key={day} className={`day ${isToday ? 'highlight-today' : ''}`}>
          {day}
        </Col>
      );
    }
    return days;
  };

  return (
    <div className="calendar-wrapper glass-effect p-4 rounded mt-4">
      <Row>
        <h2 className="text-center">{`${currentMonth} ${currentYear}`}</h2>
      </Row>
      <Row>
        <Col>Su</Col>
        <Col>Mo</Col>
        <Col>Tu</Col>
        <Col>We</Col>
        <Col>Th</Col>
        <Col>Fr</Col>
        <Col>Sa</Col>
      </Row>
      <Row className="days-container">
        {renderDays()}
      </Row>
    </div>
  );
};

export default CalenderComponentChatGpt;
