import React, { useState } from 'react';

const CourseDetails = () => {
  // Static topics for now
  const topics = [
    'Introduction to the Course',
    'Topic 1: Basics',
    'Topic 2: Intermediate Concepts',
    'Topic 3: Advanced Topics',
    'Topic 4: Case Study',
    'Topic 5: Practical Applications',
    'Topic 6: Real-World Examples',
    'Topic 7: Tools and Techniques',
    'Topic 8: Final Review',
    'Conclusion',
  ];

  // State to track completed topics
  const [completedTopics, setCompletedTopics] = useState([]);

  // Handle marking topic as complete
  const handleComplete = (topic) => {
    if (!completedTopics.includes(topic)) {
      setCompletedTopics([...completedTopics, topic]);
    }
  };

  // Inline styles
  const containerStyle = {
    width: '100%',
    margin: '0 auto',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  };

  const courseInfoStyle = {
    marginBottom: '40px',
    textAlign: 'center',
  };

  const topicBoxStyle = {
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '1200px',
    margin: '20px auto',
    display: 'flex', // Flexbox for side-by-side layout
    justifyContent: 'space-between', // Align elements horizontally
    alignItems: 'center', // Vertically center elements
  };

  const completeButtonStyle = {
    backgroundColor: '#646cff',
    color: '#fff',
    border: 'none',
    padding: '5px 10px', // Smaller size for the button
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.8rem',
    marginRight: 'auto', // Aligns button to the left
  };

  const completedButtonStyle = {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'default',
    fontSize: '0.8rem',
    marginRight: 'auto', // Aligns button to the left
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Course Title</h1>
      <div style={courseInfoStyle}>
        <img src="/images/network.png" alt="Course" width="200" />
        <p>Description of the course goes here. Learn everything you need to know in this comprehensive course.</p>
      </div>
      <h2 style={titleStyle}>Course Topics</h2>
      {topics.map((topic) => (
        <div key={topic} style={topicBoxStyle}>
          <button
            style={completedTopics.includes(topic) ? completedButtonStyle : completeButtonStyle}
            onClick={() => handleComplete(topic)}
          >
            {completedTopics.includes(topic) ? 'Completed' : 'Mark as Complete'}
          </button>
          <h3>{topic}</h3>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
