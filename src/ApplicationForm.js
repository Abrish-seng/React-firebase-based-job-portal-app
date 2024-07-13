import React, { useState } from 'react';
import { db, storage } from './firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    cv: null,
    applicationLetter: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cv' || name === 'applicationLetter') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload CV and Application Letter to Firebase Storage
      const cvRef = ref(storage, `cvs/${formData.cv.name}`);
      const appLetterRef = ref(storage, `applicationLetters/${formData.applicationLetter.name}`);
      
      await uploadBytes(cvRef, formData.cv);
      await uploadBytes(appLetterRef, formData.applicationLetter);

      const cvUrl = await getDownloadURL(cvRef);
      const appLetterUrl = await getDownloadURL(appLetterRef);

      // Add data to Firestore
      await addDoc(collection(db, 'applications'), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        cvUrl,
        appLetterUrl,
      });

      alert('Application submitted successfully');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-4">Application Form</h2>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block text-sm font-medium">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm font-medium">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cv" className="block text-sm font-medium">CV</label>
        <input
          type="file"
          id="cv"
          name="cv"
          accept="application/pdf"
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="applicationLetter" className="block text-sm font-medium">Application Letter</label>
        <input
          type="file"
          id="applicationLetter"
          name="applicationLetter"
          accept="application/pdf"
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
