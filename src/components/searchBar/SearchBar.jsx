import React, { useState } from 'react'
import './search.css'
function SearchBar(props) {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        location: "",
        exprience: "",
        type:""
    })

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const search = async() => {
        await props.fetchJobsCustom(jobCriteria);
    }
    

  return (
    <div className='flex gap-4 my-10 justify-center px-10 mb-20'>
        <select onChange={handleChange} name="title" value={jobCriteria.title} className='w-54 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Job Role</option>
            <option value="IOS Developer">IOS Developer</option>
            <option value="Front-end Developer">Front-end Developer</option>
            <option value="Back-end Developer">Back-end Developer</option>
            <option value="Android Developer">Android Developer</option>
        </select>
        <select onChange={handleChange} name="type" value={jobCriteria.type} className='w-54 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Job Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
        </select>
        <select onChange={handleChange} name="location" value={jobCriteria.location} className='w-54 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Location</option>
            <option value="Remote">Remote</option>
            <option value="In-Office">In-Office</option>
            <option value="Hybrid">Hybrid</option>
        </select>
        <select onChange={handleChange} name="exprience" value={jobCriteria.exprience} className='w-54 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Exprience</option>
            <option value="Fresh">Fresh</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
        </select>
        <button onClick={search} className='search-btn  bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
    </div>
  )
}

export default SearchBar