import { useState } from "react"
import { loginUserAPI } from "../../services/authServices";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async() => {
    try {
      const res = await loginUserAPI(email,password);
      if(res.data.success){
        alert("Login Successful");
        localStorage.setItem("usertoken",res.data.data.token);
        navigate('/home');
      }else{
        alert("Login failed! Please try again.");
      }
    } catch (error) {
      console.log("Login Error: ", error);
      console.log(error.message);
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /><br />
      <button onClick={handleLogin}>Login</button>
      <h6>Don't have an account? <a href="/register">Register</a></h6>
    </div>
  )
}

export default LoginPage
