import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AddTasks = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [topic, setTopic] = useState('');
    const [deadline, setDeadline] = useState('');
    const [group, setGroup] = useState('');
    const [classes, setClasses] = useState([]);
    const currentDate = new Date();

  
    useEffect(() => {
        axios
            .get('https://aquatic-supreme-saga.glitch.me/classes')
            .then((response) => {
                const groupNames = response.data;
                console.log(groupNames);
                const groups = groupNames.map((item) => item.name);
                console.log(groups);
                setClasses(groups);
            })
            .catch((err) => console.log(err));
    }, []);

  
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://aquatic-supreme-saga.glitch.me/tasks', {
                title: title,
                classId: group, 
                description: description,
                topic: topic,
                deadline: deadline,
                createdAt: currentDate,
                teacherId: '', 
                assignments: [],
                completionRate: 0, 
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div style={{ paddingLeft: '0px', paddingTop: '40px' }}>
            <form
                onSubmit={handleSubmit}
                style={{ paddingLeft: '400px', paddingTop: '50px' }}
            >
                <h1
                    className="font-bold text-[#4D167A]"
                    style={{ paddingLeft: '10px', fontSize: '40px', paddingTop: '10px' }}
                >
                    Create Tasks!
                </h1>
            
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="title-task"
                    type="text"
                    id="title-task"
                    name="title"
                    placeholder="Tasks title"
                    required
                />
             
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="description-task"
                    type="text"
                    id="description-task"
                    name="description"
                    placeholder="Description"
                    required
                />
           
                <input
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="topic-task"
                    type="text"
                    id="topic"
                    name="topic"
                    placeholder="Topic"
                    required
                />
          

          <select
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                    className="group-select"
                    required
                >
                    <option value="">Select Group</option>
                    {classes.map((className, index) => (
                        <option key={index} value={className}>
                            {className}
                        </option>
                    ))}
                </select>
        
                <input
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    type="datetime-local"
                    name="deadline"
                    required
                />
             
                <button type='submit' className='btn-creat' style={{ marginLeft: "420px" }}>Create Task</button>

            </form>
        </div>
    );
};

export default AddTasks;
