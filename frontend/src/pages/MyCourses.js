import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses/getPaidCourses');
        console.log(response);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseClick = (courseId) => {
    navigate('/course-details');
  };

  const buyButtonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <section style={{ width: '80%', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>My Courses</h1>
      {courses.length === 0 ? (
        <p>You have not purchased any courses yet.</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
          {courses.map((course) => (
            <div
              key={course._id}
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                textAlign: 'center',
                padding: '20px',
                cursor: 'pointer',
              }}
            >
              <img src='/images/network.png' alt={course.title} style={{ width: '100%', height: 'auto', borderBottom: '1px solid #ddd' }} />
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <p style={{ fontWeight: 'bold' }}>₹{course.price}</p>
              <button
                style={buyButtonStyle}
                onClick={() => handleCourseClick(course._id)}
              >
                View course
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyCourses;
