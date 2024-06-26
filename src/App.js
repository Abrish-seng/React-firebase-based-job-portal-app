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

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempjobs = [];

    const jobRef = query(collection(db, "jobs"));
    const q = query(jobRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      tempjobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempjobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobsCustom = async (jobSearch) => {
    
    setCustomSearch(true);
    const tempjobs = [];
    // if (!jobSearch.title || !jobSearch.type || !jobSearch.experience || !jobSearch.location) {
    //   setJobs([]);
    //   return;
    // }
    

    const jobRef = query(collection(db, "jobs"));
    const q = query(
      jobRef,
      where("type", "==", jobSearch.type),
      where("title", "==", jobSearch.title),
      where("exprience", "==", jobSearch.exprience),
      where("location", "==", jobSearch.location),
      orderBy("postedOn", "desc")
    );
    
   
    const querySnapshot = await getDocs(q);
   

    querySnapshot.forEach((doc) => {
      jobs.push({ id: doc.id, ...doc.data() });
    });

    // console.log(jobs)
    setJobs(tempjobs);

  };

  // useEffect(() => {
  //   fetchJobs();
  // }, []);

  return (
    <div className="App">
      
      {/* <Login/> */}
      <Home/>
      
      <SearchBar onData={fetchJobsCustom} />
      {customSearch && (
        <button onClick={fetchJobs} className="flex pl-[1000px] mb-3 ">
          <p className="bg-blue-500 px-5 py-4 rounded-md text-white cursor-pointer">
            Clear Filters
          </p>
        </button>
      )}
      {jobs.map((job) => (
        <JobCards key={job.id} {...job} />
      ))}
      <Service/>
      <AboutUs/>
    </div>
  );
}

export default App;
