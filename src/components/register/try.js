import React, { useState } from "react";

export default function Try() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const getData = async (e) => {
    e.preventDefault();
    const { username, email, password } = user;

    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    };

    try {
      const res = await fetch('https://online-job-portal-e1b17-default-rtdb.firebaseio.com/userData.json', option);
      if (res.ok) {
        alert('Message sent');
        console.log(res);
      } else {
        alert('Error occurred');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div>
      <form method="POST" onSubmit={getData}>
        {/* Form fields with appropriate names and onChange handlers */}
        <input
          type="text"
          onChange={handleChange}
          name="username"
          value={user.username}
          placeholder="Username"
        />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={user.email}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={user.password}
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
