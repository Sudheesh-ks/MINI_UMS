import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : null;

    if (!user || user.role !== 'admin') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      Welcome to Admin Dashboard
    </div>
  )
}

export default Dashboard
