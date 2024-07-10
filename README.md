# React and firebase based job portal application

### Tell a story about yourself which relates to why you chose to work on this project
Growing up in a city where job postings were still done the old-fashioned way—pinned on bulletin boards or shared in Telegram groups—I always felt there was a more efficient method to connect job seekers and employers. As a budding software engineer with a passion for React, Tailwind CSS, and Firebase, I saw an opportunity to bring a modern solution to my community.

A few years ago, a close friend of mine was desperately looking for a job. Despite having the right qualifications, he struggled to find suitable opportunities simply because the information was so scattered and outdated. This experience made me realize the need for a centralized, user-friendly platform that could streamline the job search process.

That’s when I decided to create a job portal. Using my skills in React JS, Tailwind CSS, and Firebase, I set out to develop an application that would allow job seekers to filter and find their desired jobs easily. This platform also includes a login and registration page, making it secure and personalized for users.

Working on this project is not just about honing my technical skills—it's about giving back to my community and making a real impact. By providing a modern, efficient solution, I hope to make job searching less stressful and more productive for everyone in my city.

### Summarize what you've accomplished with your project

### Project Architecture

### Client Side (React JS + Tailwind CSS)

`Login/Registration`: Users input their credentials which are sent to Firebase Authentication.

`Job Listings`: Users can view and filter job listings stored in Firebase Firestore.

`Job Application`: Job seekers can apply for jobs, and the application data is sent to Firestore.

### Server Side (Firebase)

`Firebase Authentication`: Manages user authentication and authorization.

`Firebase Firestore`: Stores job listings, user profiles, and applications.

`Firebase Cloud Functions`: Handles server-side logic such as sending notifications and processing data.
External Integrations

`Email Notifications`: Through Cloud Functions, emails are sent to users for various actions (e.g., application confirmations).
Summary of Technologies Used
### Frontend:

`React JS`: We chose React for its component-based architecture, which allows for reusable UI components and efficient state management. React's virtual DOM enhances performance, making it suitable for dynamic job listings.

`Tailwind CSS`: Tailwind CSS was selected for its utility-first approach, enabling rapid UI development with consistent design. It allows for highly customizable and responsive layouts without writing custom CSS.
### Backend:

`Firebase`: Firebase was chosen for its robust suite of tools that integrate seamlessly. It provides real-time database capabilities with Firestore, and secure authentication with Firebase Authentication. Additionally, Firebase Cloud Functions allow for scalable server-side logic without managing servers.
### Why These Choices?

`React JS and Tailwind CSS`: This combination provides a powerful and flexible way to create modern, responsive user interfaces quickly. React's ecosystem and community support were additional factors.

`Firebase`: It offers a comprehensive backend-as-a-service (BaaS) solution, reducing the need for complex infrastructure management. Its real-time data syncing and out-of-the-box authentication services speed up development.
## Overview of Completed Features
1. ### Job Filtering System

 Users can filter job listings based on criteria such as job title, company, location, and type (e.g., full-time, part-time).
Implementation: Using Firestore queries, we dynamically fetch and display filtered results. The UI is built with React components, allowing users to easily adjust filters and see real-time updates.

2. ### User Authentication

Provides secure login and registration functionality for job seekers and employers.
Implementation: Implemented with Firebase Authentication, it supports email/password sign-ups and logins. The authentication state is managed in React, ensuring a seamless user experience across the application.

3. ### Job Application Process

Job seekers can apply for jobs directly through the portal, with their applications stored and managed in Firestore.
Implementation: The application form is built using React, with form validation and state management. On submission, the data is sent to Firestore, and a Cloud Function triggers an email confirmation to the applicant.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

