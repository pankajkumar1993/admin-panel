import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import "./CalenderComponentBlackBox.scss"

const CalenderComponentBlackBox = () => {
  const [daysOfWeek] = useState(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  const [dates] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ]);

  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    setSelectedDate(day);
  }, []);

  const handleDateClick = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar-container">
      <h2>
        {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
      </h2>
      <Table responsive className="calendar-table">
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }, (_, i) => (
            <tr key={i}>
              {dates.slice(i * 7, (i + 1) * 7).map((date) => (
                <td
                  key={date}
                  onClick={() => handleDateClick(date)}
                  className={selectedDate === date ? 'selected' : ''}
                >
                  {date}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CalenderComponentBlackBox;