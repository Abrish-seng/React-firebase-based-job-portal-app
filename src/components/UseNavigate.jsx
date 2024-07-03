import { useNavigate } from 'react-router-dom';

const UseNavigate = () => {
  const navigate = useNavigate(); // Call useNavigate inside the hook

  const navigateToLogin = () => {
    navigate('/login'); // Replace '/login' with your actual login route
  };

  return { navigateToLogin };
};

export default UseNavigate;
