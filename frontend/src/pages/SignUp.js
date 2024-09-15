import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({
    name: "", // Ensure initial value is an empty string
    email: "",    // Same for other fields
    phno: "",
    password: ""
  });

  // Handling the input values
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate=useNavigate();
  // Handle form on submit
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data: ", response);

      if (response.ok) {
        const responseData = await response.json();
        alert("Registration successful");
        // storeTokenInLS(responseData.token);
        setUser({ name: "", email: "", phno: "", password: "" });
        console.log(responseData);
        navigate('/login');
      } else {
        console.log("Error inside response", "error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
              <img 
    src="/images/login.png" 
    alt="lets fill the login form" 
    style={{ width: '400px', height: '400px' }} 
    />

              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit} action="">
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.name}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phno"
                      placeholder="Phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phno}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
