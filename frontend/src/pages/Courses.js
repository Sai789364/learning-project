import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure you have axios installed

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses/getallcourses');
        console.log(response);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleBuyNow = (courseId) => {
    navigate(`/purchase-course`);
  };

  // Inline styles (same as before)
  const containerStyle = {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
  };

  const mainHeadingStyle = {
    fontSize: '2.5rem',
    marginBottom: '40px',
    textAlign: 'center',
    color: '#333',
  };

  const courseCardsStyle = {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  };

  const courseCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'center',
    padding: '20px',
  };

  const courseImageStyle = {
    width: '100%',
    height: 'auto',
    borderBottom: '1px solid #ddd',
  };

  const courseTitleStyle = {
    fontSize: '1.5rem',
    margin: '10px 0',
  };

  const courseDescriptionStyle = {
    fontSize: '1rem',
    color: '#555',
  };

  const coursePriceStyle = {
    fontSize: '1.2rem',
    color: '#333',
    margin: '10px 0',
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
    <section>
      <main style={containerStyle}>
        <h1 style={mainHeadingStyle}>Available Courses</h1>
        <div style={courseCardsStyle}>
          {courses.map(course => (
            <div key={course._id} style={courseCardStyle}>
              <img
                src='/images/webdev.png'
                alt={course.title}
                style={courseImageStyle}
              />
              <h2 style={courseTitleStyle}>{course.title}</h2>
              <p style={courseDescriptionStyle}>{course.description}</p>
              <p style={coursePriceStyle}>₹{course.price}</p>
              <button
                style={buyButtonStyle}
                onClick={() => handleBuyNow(course._id)}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Courses;
