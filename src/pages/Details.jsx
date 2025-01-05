import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; 

const Details = () => {
  const [tasks, setTasks] = useState([]);  
  const [url, setUrl] = useState(""); 
  const [comment, setComment] = useState(""); 
  const { id, username } = useParams(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    
    axios
      .get('https://aquatic-supreme-saga.glitch.me/tasks')
      .then((response) => {
        const allTasks = response.data;
     
        const filteredTasks = allTasks.filter((task) => String(task.classId) === String(id));
        setTasks(filteredTasks);
      })
      .catch((error) => {
        console.error('Xəta baş verdi:', error.message);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault(); 

  
    const newAssignment = {
      taskId: id,
      studentId: username,
      url: url,
      feedback: comment,
      assignDate: new Date().toISOString(),
      status: "submitted", 
    };

    axios
      .post('https://aquatic-supreme-saga.glitch.me/assignments', newAssignment)
      .then((response) => {
        alert('Tapşırıq uğurla göndərildi!');
        navigate(`/student/${username}/tasks`);
      })
      .catch((error) => {
        console.error('Xəta baş verdi:', error.message);
      });
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginLeft: '300px', marginTop: '10px' }}>
          {tasks.map((task) => (
            <div style={{ paddingLeft: '30px', paddingTop: '30px' }} key={task.id}>
            <Link to={`details/detailstask/${task.id}`}>
              
              
              <h1 className="font-bold" style={{ fontSize: '20px', cursor:"pointer", }}>
              The user {task.teacherId} added a task:
                {task.title} - {task.description}
              </h1>
              </Link>
              <p style={{ paddingTop: '20px', paddingBottom: '10px' }}>{task.createdAt}</p>
              <div style={{ display: 'flex', paddingRight: '20px' }}>
                <p>Homework</p>
                <p style={{ paddingLeft: '600px' }}>{task.deadline}</p>
              </div>
              <p>{task.completionRate} ball</p>
              <hr style={{ width: '850px' }} />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* <div style={{ marginLeft: '10px', width: '300px', height: '300px' }}>
            <p style={{ textAlign: 'center', paddingTop: '40px' }}>My assignments</p>
            <form onSubmit={handleSubmit}>
              <input
                className="inp-detail"
                type="url"
                id="website"
                name="website"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)} 
                required
              />
              <button type="submit" className="btn-sbm">
                Submit
              </button>
            </form>
          </div>
          <div style={{ marginLeft: '10px', width: '300px' }}>
            <p style={{ textAlign: 'center', paddingTop: '40px' }}>Comments</p>
            <form onSubmit={handleSubmit}>
              <input
                className="inp-detail"
                type="text"
                id="comments"
                name="comments"
                placeholder="Comments"
                value={comment}
                onChange={(e) => setComment(e.target.value)} 
                required
              />
              <button type="submit" className="btn-sbm">
                Submit
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Details;
