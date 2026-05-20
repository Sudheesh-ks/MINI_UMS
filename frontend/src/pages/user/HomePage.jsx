import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("usertoken");
    navigate('/');
  }
  
  return (
    <div>
      <h1>Welcome Home</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default HomePage
