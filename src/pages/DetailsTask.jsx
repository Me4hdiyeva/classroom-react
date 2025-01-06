import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DetailsTask = () => {
  const [task, setTask] = useState(null);
  const [url, setUrl] = useState("");  
  const [comment, setComment] = useState("");  
  const { id, username } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
  
    const newAssignment = {
      taskId: "azmp100",  
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
  

  useEffect(() => {
    axios
      .get('https://aquatic-supreme-saga.glitch.me/tasks')
      .then((response) => {
        const tasks = response.data;
        console.log(tasks);

       
        const foundTask = tasks.find((task) => String(task.id) === String(id));
        console.log("Found Task:", foundTask);

        if (foundTask) {
          setTask(foundTask);
        } else {
          console.log("Task not found");
        }
      })
      .catch((error) => {
        console.error('Error occurred:', error.message);
      });
  }, [id]);

  return (
    <div style={{ paddingLeft: '400px', paddingTop: '40px' }}>
      {task ? (
        <div className='asg-task'>
            <div>

       <div style={{ padding: '20px', borderRadius: '8px', maxWidth: '800px', margin: '0 auto' }}>
  <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: '#4D167A' }}>
    {task.description} - {task.topic}
  </h1>

  <p style={{ marginTop: '10px', fontSize: '18px', color: '#4D167A' }}>
    {task.teacherId} - {new Date(task.createdAt).toLocaleString()}
  </p>
  <p style={{ marginTop: '10px', fontSize: '18px', color: '#4D167A' }}>Homework</p>

  <div className="flex gap-9" style={{ marginTop: '10px' }}>
    <p style={{ fontSize: '20px', color: '#4D167A' }}>
      <strong>{task.completionRate} points</strong>
    </p>

    <p style={{ fontSize: '20px', color: '#4D167A' }}>
      <strong>Deadline:</strong> {new Date(task.deadline).toLocaleString()}
    </p>
  </div>

  <h2 style={{ paddingTop: '40px', fontSize: '24px', fontWeight: 'bold', marginTop: '20px', color: '#4D167A' }}>
    Instructions
  </h2>
  <p style={{ paddingTop: '40px', marginTop: '10px', fontSize: '18px', color: '#4D167A' }}>
    {task.instructions ? task.instructions : 'No specific instructions provided.'}
  </p>
</div>

          
            </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginLeft: '10px', width: '300px', height: '300px' }}>
              <p style={{ textAlign: 'center', paddingTop: '30px' }}>My assignments</p>
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
              <p style={{ textAlign: 'center', paddingTop: '30px' }}>Comments</p>
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
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default DetailsTask;
