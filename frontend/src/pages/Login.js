import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        alert("Login successful");
  
        // Store token and userId in local storage
        localStorage.setItem('token', responseData.token);
        localStorage.setItem('userId', responseData.userId);
  
        // Clear form data
        setUser({ email: "", password: "" });
  
        // Redirect to courses page
        navigate('/courses');
      } else {
        alert("Invalid credentials");
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src="/images/login.png" alt="Let's fill the login form" style={{ width: '400px', height: '400px' }} />
            </div>
            <div className="registration-form">
              <h1 className="main-heading mb-3">Login Form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder='Enter your email'
                    id='email'
                    required
                    autoComplete='off'
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    id='password'
                    required
                    autoComplete='off'
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <br />
                <button type="submit" className='btn btn-submit'>Login Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Login;
