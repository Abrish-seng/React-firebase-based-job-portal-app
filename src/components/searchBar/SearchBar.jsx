import React from "react";
import './search.css'
import { useState } from "react";
export default function SearchBar({onData}) {
  const [jobSearch, setJobSearch] = useState({
    title:"",
    type:"",
    location:"",
    exprience:"",
  });
  const handleChange = (e) => {
    setJobSearch((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
   
  };
    // console.log(jobSearch);
  const search = async() => {
    onData(jobSearch);
    // console.log(result)
}


  return (
    <div className="search-section flex py-4  gap-6 mb-10 justify-center ">
      <select mt-200
        onChange={handleChange}
        className="w-54 py-3 pl-4 font-semibold rounded-md"
        name="title"
        value={jobSearch.title}
      >
        <option value='' selected disabled hidden>
          Job Roles
        </option>
        <option value="Front-end developer">
          Front-end Software Developer
        </option>
        <option value="Back-end developer">Back-end Software Developer</option>
        <option value="Full-stack developer">
          Full-stack Software Developer
        </option>
        <option value="IOS developer">IOS developer</option>
        <option value="Data Science">Data Science</option>
      </select>
      <select
        onChange={handleChange}
        className="w-54 py-3 pl-4 font-semibold rounded-md"
        name="type"
        value={jobSearch.type}
      >
        <option value='' disabled hidden  >
          Job Type
        </option>
        <option value="full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
      </select>
      <select
        onChange={handleChange}
        className="w-54 py-3 pl-4 font-semibold rounded-md"
        name="location"
        value={jobSearch.location}
      >
        <option value='' disabled hidden  >
          Location
        </option>
        <option value="remote">Remote</option>
        <option value="in office ">In office</option>
        <option value="hybrid">Hybrid</option>
      </select>
      <select
        onChange={handleChange}
        className="w-54 py-3 pl-4 font-semibold rounded-md"
        name="exprience"
        value={jobSearch.exprience}
      >
        <option value='' disabled hidden >
          Exprience
        </option>
        <option value="Junior Level">Junior Level</option>
        <option value="Fresh">Fresh</option>
        <option value="Senior level">Senior Level</option>
        <option value="Intermidate Level">Intermidate Level</option>
      </select>
      <button
        type="button"  onClick={search}
        className="text-white w-30 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Search
      </button>
    </div>
  );
}
