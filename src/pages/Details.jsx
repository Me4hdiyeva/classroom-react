import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const [tasks, setTasks] = useState([]);
  const { id } = useParams(); // URL-dən gələn 'id' parametri

  useEffect(() => {
    axios
      .get('https://aquatic-supreme-saga.glitch.me/tasks')
      .then((response) => {
        const allTasks = response.data;
        console.log("alltask",allTasks);
        console.log(typeof(id));
        const typ = allTasks.map((t)=> t.classId)
        console.log("typ", typ);
        
        
        const filteredTasks = allTasks.filter((task) => String(task.classId) === String(id));
        console.log("filteredTasks",filteredTasks);
        
        setTasks(filteredTasks);
      })
      .catch((error) => {
        console.error('Xəta baş verdi:', error.message);
      });
  }, [id]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            marginLeft: '300px',
            marginTop: '10px',
          }}
        >
          {tasks.map((task) => (
            <div style={{ paddingLeft: '30px', paddingTop: '30px' }} key={task.id}>
              <h1 className="font-bold" style={{ fontSize: '20px' }}>
                {task.title} - {task.description}
              </h1>
              <p style={{ paddingTop: '20px', paddingBottom: '10px' }}>{task.createdAt}</p>
              <div style={{ display: 'flex', paddingRight: '20px' }}>
                <p>homework </p>
                <p style={{ paddingLeft: '600px' }}>{task.deadline}</p>
              </div>
              <p>{task.completionRate} ball</p>
              <hr style={{ width: '850px' }} />
            </div>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              marginLeft: '10px',
              width: '300px',
              height: '300px',
            }}
          >
            <p
              style={{
                textAlign: 'center',
                paddingTop: '40px',
              }}
            >
              My assignments
            </p>
            <input
              className="inp"
              type="url"
              id="website"
              name="website"
              placeholder="https://example.com"
              required
            />
            <button className="btn-sbm">Submit</button>
            
          </div>
          <div
            style={{
              marginLeft: '10px',
              width: '300px',
            }}
          >
            <p
              style={{
                textAlign: 'center',
                paddingTop: '40px',
              }}
            >
              Comments
            </p>
            <input
              className="inp"
              type="text"
              id="comments"
              name="comments"
              placeholder="comments"
              required
            />
            <button className="btn-sbm">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
