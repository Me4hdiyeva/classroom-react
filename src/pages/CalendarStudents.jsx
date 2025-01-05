import FullCalendar from '@fullcalendar/react';
import React, { useEffect, useState } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CalendarStudents = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://aquatic-supreme-saga.glitch.me/tasks'); 
        console.log(response.data);

        const formattedEvents = response.data.map(task => ({
          title: task.name,
          date: task.deadline, 
          id: task.classId, 
        }));

        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (info) => {
    const taskId = info.event.id; 
    navigate(`/student/Mehdiyeva/tasks/details/${taskId}`); 
  };

  return (
    <div style={{ padding: '20px', paddingLeft: '280px', paddingTop: '30px' }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
      />
    </div>
  );
};

export default CalendarStudents;
