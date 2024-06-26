import React from 'react';
import logo from '../assets/job-logo-symbol-vector-design.jpg'
import profile from '../assets/profile.jpg'
import videoBg from '../assets/videobg.mp4' 
import './home.css'
function Home(){
  return(
    <div>
     <div className='bg-neutral-200'>
    <div className='flex justify-between ml-12 mr-12 items-center '>
      <div className='flex justify-center items-center'>
      <img src={logo} className='w-20 h-20  rounded-full' alt=''/>
      <ul className='flex justify-center items-center mx-7'>
        <li className='mx-7 font-quentiessential text-xl'><a href="">Jobs</a></li>
        <li className='mx-7 font-quentiessential text-xl'><a href="">Companies</a></li>
        <li className='mx-7 font-quentiessential text-xl'><a href="">Services</a></li>
      </ul>
      </div>
     <div className='flex justify-center items-center '>
      <button className='mx-7 font-quentiessential text-xl border-2 border-blue-500 px-4 py-1 rounded-full'>Login</button>
      <button className='mx-7 font-quentiessential text-xl bg-red-400 px-4 py-1 rounded-full'>Register</button>
      <h3 className='mx-7 font-quentiessential text-xl'>About us</h3>
     </div>
    
      </div>
      
     </div>
     
     <div className="container">
        <h3 className='text-6xl font-quent'>Find your Dream Job</h3>
        <h3 className='text-2xl mt-4 font-playwrite'>Jobs for you to Explore</h3>
     </div>
     </div>
  );
}
export default Home;