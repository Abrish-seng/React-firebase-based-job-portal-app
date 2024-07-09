import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import SearchBar from "./components/searchBar/SearchBar";
import JobCards from "./components/jobCards/JobCards";
// import JobData from "./components/jobCards/JobData";
import { db } from "./firebase.config";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import Register from '../src/components/register/Register'
import Login from '../src/components/login/Login'
import Try from "./components/register/try";
import AboutUs from "./components/aboutus/AboutUs";
import Service from "./components/service/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async() => {
    setCustomSearch(false);
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  const fetchJobsCustom = async(jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("exprience", "==", jobCriteria.exprience), where("location", "==", jobCriteria.location) ,orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      // console.log(job.id, " => ", job.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    console.log(tempJobs)
    setJobs(tempJobs);
  }


  useEffect(() => {
    fetchJobs()
  },[])


  return (
    <div>
      
      <BrowserRouter>
      <Home/>
      <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
      
      <SearchBar fetchJobsCustom={fetchJobsCustom}/>
      {customSearch && 
        <button onClick={fetchJobs} className="flex pl-[1000px] mb-2">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">Clear Filters</p>
        </button>
      }
      {jobs.map((job)=> (
        <JobCards key={job.id} {...job}/>
      ))}
      <Service/>
      <AboutUs/>
    </div>
  )
}

export default App