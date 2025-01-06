import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Classes = () => {
    const [name, setName] = useState('');
    const [topics, setTopics] = useState('');
    const [major, setMajor] = useState('');
    const [schedule, setSchedule] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [students, setStudents] = useState(''); 

    const { username } = useParams();

    const handleDayChange = (e) => {
        const { value, checked } = e.target;
        setSelectedDays((prev) => {
            if (checked) {
                return [...prev, value];
            } else {
                return prev.filter(day => day !== value);
            }
        });
    };

    const addSchedule = () => {
        if (startTime && endTime && selectedDays.length > 0) {
            const newSchedule = selectedDays.map(day => ({
                day,
                time: `${startTime} - ${endTime}`,
            }));
            setSchedule((prev) => [...prev, ...newSchedule]);
            setStartTime('');
            setEndTime('');
            setSelectedDays([]);
        }
    };

    const handleStudentChange = (e) => {
        setStudents(e.target.value); 
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        axios
            .post("https://aquatic-supreme-saga.glitch.me/classes", {
                name,
                major,
                topics: topics.split(','),
                teacherId: username,
                studentIds: students.split(','), 
                schedule
            })
            .then((response) => {
                console.log('Class Created:', response.data);
                Swal.fire({
                    title: "Class Created!",
                    icon: "success",
                    draggable: true
                  });
            })
            .catch((err) => {
                console.error('Error:', err);
            });
    };

    return (
        <div>
            <form onSubmit={handelSubmit} style={{ paddingLeft: "400px", paddingTop: "50px" }}>
                <h1 className='font-bold' style={{ paddingLeft: "350px", fontSize: "30px", paddingTop: "30px" }}>Create Course!</h1>

                <input
                    className='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Course Name"
                    required
                />
                <input
                    className='topics'
                    value={topics}
                    onChange={(e) => setTopics(e.target.value)}
                    type="text"
                    id="topics"
                    name="topics"
                    placeholder="Topics (comma-separated)"
                    required
                />
                <input
                    className='major'
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    type="text"
                    id="major"
                    name="major"
                    placeholder="Major"
                    required
                />

                <div className="day-selection">
                    <h4>Select Days</h4>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                        <label key={day}>
                            <input
                                type='checkbox'
                                value={day}
                                onChange={handleDayChange}
                            />
                            {day}
                        </label>
                    ))}
                </div>
                
                <div className="schedule-container">
                    <h4>Add Schedule</h4>
                    <div style={{ display: "flex" }}>
                        <div>
                            <label>Start Time</label>
                            <input
                                type='time'
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                            />
                            <label>End Time</label>
                            <input
                                type='time'
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                            />
                        </div>

                        <ul className="schedule-list">
                            {schedule.map((item, index) => (
                                <li key={index}>
                                    {`${item.day}: ${item.time}`}
                                </li>
                            ))}
                        </ul>
                        <button
                            type='button'
                            onClick={addSchedule}
                            className="add-button"
                        >
                            Add
                        </button>
                    </div>
                </div>

           
                <input
                    className='add-students'
                    value={students}
                    onChange={handleStudentChange}
                    type="text"
                    id="students"
                    name="students"
                    placeholder="Add Students "
                />

                <button type='submit' className='btn-creat' style={{ marginLeft: "420px", marginTop: '20px' }}>
                    Create Course
                </button>
            </form>
        </div>
    );
};

export default Classes;
