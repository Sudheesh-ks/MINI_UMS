import { useState } from "react"
import { registerUserAPI } from "../../services/authServices"

const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async() => {
        try {
            const res = await registerUserAPI(username, email, password);
            if(res.data.success) {
                alert("Registration successful! Please login.")
                setUsername('')
                setEmail('')
                setPassword('')
            }else {
                alert("Registration failed! Please try again.")
            }
        } catch (error) {
            console.log("Registration Error: ",error)
        }
    }

  return (
    <div>
      <h1>Register Page</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> <br /><br />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /><br />
      <button onClick={handleRegister}>Register</button>
      <h6>Already have an account? <a href="/">Login</a></h6>
    </div>
  )
}

export default RegisterPage
