import FullCalendar from '@fullcalendar/react'
import React, { useEffect, useState } from 'react'
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';

const CalendarComponent = () => {

  const [events, setEvents] = useState([]); 

 
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://aquatic-supreme-saga.glitch.me/tasks'); 
        console.log(response.data);

        const deadlines = response.data;
        const data = deadlines.map(element => {
          const deadline = new Date(element.deadline);
          if (isNaN(deadline)) {
            console.error('Yanlış tarix formatı:', element.deadline);
            return null; 
          }

    
          const formattedDate = deadline.toISOString().split('T')[0]; 

          return {
            title: element.title, 
            date: formattedDate,    
          };
        }).filter(event => event !== null); 

        console.log(data); 
        setEvents(data);

      } catch (error) {
        console.error('Məlumatlar yüklənərkən səhv baş verdi:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div style={{ padding: "20px", paddingLeft: "280px", paddingTop: "3px" }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events} 
      />
    </div>
  )
}

export default CalendarComponent;
