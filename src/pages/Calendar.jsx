import FullCalendar from '@fullcalendar/react';
import React, { useEffect, useState } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';

const getDateForDayOfWeek = (dayOfWeek) => {
  const today = new Date();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const dayIndex = dayNames.indexOf(dayOfWeek); 
  const currentDayIndex = today.getDay();

  const diff = dayIndex - currentDayIndex;
  today.setDate(today.getDate() + diff); 

  return today;
};

const Calendar = () => {
  const [events, setEvents] = useState([]); 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://aquatic-supreme-saga.glitch.me/classes'); 
        console.log(response.data);

        const classes = response.data;
        const formattedEvents = classes.flatMap(element => {
          return element.schedule.map(schedule => {
           
            const eventDate = getDateForDayOfWeek(schedule.day);
            const formattedDate = eventDate.toISOString().split('T')[0]; 

            const startTime = schedule.time.split(' - ')[0]; 
            const endTime = schedule.time.split(' - ')[1]; 

            return {
              title: `${element.name} - ${startTime} - ${endTime}`, 
              date: formattedDate,  
              start: `${formattedDate}T${startTime}:00`, 
              end: `${formattedDate}T${endTime}:00`, 
            };
          }).filter(event => event !== null); 
        });

        console.log(formattedEvents); 
        setEvents(formattedEvents);

      } catch (error) {
        console.error(error);
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

export default Calendar;
