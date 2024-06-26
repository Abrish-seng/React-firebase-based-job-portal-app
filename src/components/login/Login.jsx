import { useState } from 'react';
import './login.css';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../../firebase.config.js';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true); // Default to login view

  // console.log(auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const { email, password } = user;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const loggedInUser = userCredential.user;
      console.log(loggedInUser);

      // No need to store login data in Firestore

      alert('Login successful!');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);

    const { email, password } = user;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;
      console.log(newUser);

      await setDoc(doc(db, "Users", newUser.uid), {
        email: newUser.email,
        uid: newUser.uid,
        createdAt: new Date(),
      });

      alert('Signup successful!');
    } catch (err) {
      setError(err.message);
    }
  };
  const handleResetPassword = ()=>{
    const email = prompt('Please enter your email?')
    sendPasswordResetEmail(auth,email)
    alert('Email sent! check your inbox.')
  }
  return (
    <div className='login'>
      <form action="" onSubmit={isLogin ? handleLogin : handleSignup} className="loginForm">
        <h1 className='font-mono text-2xl'>Welcome to the job portal</h1>
        <div className='flex justify-center items-center'>
          <button
            className={`login-btn rounded-lg border-2 px-5 py-1 bg-yellow-900 text-white mr-4 ${
              isLogin ? '' : 'bg-gray-400 text-black'
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`login-btn rounded-lg border-2 px-5 py-1 bg-yellow-900 text-white ${
              isLogin ? 'bg-gray-400 text-black' : ''
            }`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        <label htmlFor="">Email *</label>
        <input
          className='py-1 rounded-lg'
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder='Enter Your Email...'
        />
        <label htmlFor="">Password *</label>
        <input
          className='py-1 rounded-lg'
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder='Enter Your password'
        />
        <button className="loginButton">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
      {error && <p className="error">{error}</p>}

      <p onClick={handleResetPassword} className='text-red text-blue-700 mt-5'>Forget password</p>
    </div>
  );
}

