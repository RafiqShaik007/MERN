import {Link} from 'react-router-dom'
import zz from './login.module.css'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Login=()=>{

    let [email, setEmail] = useState()
    let [password, setPassword] =  useState()

    let navigate = useNavigate()

    let emailData = (a)=>{
        setEmail(a.target.value)
    }

    let passwordData = (b) => {
        setPassword(b.target.value)
    }

    let checkData=(c)=>{
        c.preventDefault()
        // console.log('check data is working')
        // console.log(email, password)
        let data = {email, password};
        axios.post('http://localhost:4000/login', data)
        .then((res)=>{
            if (res.data.status == 200){
                alert(res.data.message)
                navigate('/home')
            }
            else{
                alert(res.data.message)
            }
        })
    }
    return(
        <div id={zz.login}>
            <form >
                
                <img src={'https://cdn-icons-png.flaticon.com/512/21/21104.png'} alt="" />
                <h3>Have an Account ?</h3>
             
                <input type="email"  className={zz.aa} placeholder='your-email@gmail.com' value={email} onChange={emailData}/>
              
                <input type="password"  className={zz.aa} placeholder='Your Password' value={password} onChange={passwordData}/>
                <button className={zz.aa} onClick={checkData}>LOGIN</button>
                <label >
                    New User?
                    <Link to='/signup'> Create Account</Link>
                </label>
            </form>
        </div>
    )
}
export default Login