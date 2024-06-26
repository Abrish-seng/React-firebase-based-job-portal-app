import { useState } from 'react'
import './register.css'

export default function Register() {
  const [user, setUser] = useState({
    username:'', email:'', password:''
  })

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
        alert('user registered');
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
    <div className="register">
    <span className="registerTitle">Register</span>
    <form className="registerForm" method='POST' onSubmit={getData}>
      <label>Username</label>
      <input className="registerInput" name='username' type="text" value={user.username} onChange={handleChange} placeholder="Enter your username..." />
      <label>Email</label>
      <input className="registerInput" type="text" name='email' value={user.email} onChange={handleChange} placeholder="Enter your email..." />
      <label>Password</label>
      <input className="registerInput" type="password" name='password' value={user.password} onChange={handleChange} placeholder="Enter your password..." />
      <button className="registerButton">Register</button>
    </form>
      <button className="registerLoginButton">Login</button>
  </div>
  )
}
