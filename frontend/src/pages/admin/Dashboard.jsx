import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../redux/userSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const { data: users, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log("User data in Dashboard:", users);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const currentUser = storedUser ? JSON.parse(storedUser) : null;

    if (!currentUser || currentUser.role !== 'admin') {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Welcome to Admin Dashboard</h1>
      {loading && <p>Loading users...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {users && users.map((userItem) => (
          <li key={userItem._id}>{userItem.username}</li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard
