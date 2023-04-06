import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const goToProfile = () => {
        navigate("profile/1/kani") //params
    }
    // const goToHome = () => {
    //     navigate("home?name=kathir&age=2") //query param as string
    // }
    const goToHome = () => {
        navigate({
            pathname : "home",
            search :"?name=kathir&age=2" //query param as object
    });
}
  return (
    <div>Login
        <Link to="/Home?id=2&name=kani&dep=ece">Home</Link> 
        <button onClick={()=>goToHome()}>Home</button>
        <button onClick={()=>goToProfile()}>Profile</button>
    </div>
  )
}

export default Login