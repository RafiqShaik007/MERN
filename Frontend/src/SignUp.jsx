import {Link} from 'react-router-dom'
import zz from './signup.module.css'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Signup=()=>{

    let [firstName, setFirstName] = useState()
    let [lastName, setLastName] = useState()
    let [email, setEmail] = useState()
    let [password, setPassword]  = useState()
    let [conformpassword, setconformpassword] = useState()

    let navigate = useNavigate()


    let firstNameData=(a)=>{
        // console.log(a.target.value)
        setFirstName(a.target.value)
    }

    let lastNameData=(b)=>{
        // console.log(b.target.value)
        setLastName(b.target.value)
    }

    let emailData = (c)=>{
        // console.log(c.target.value)
        setEmail(c.target.value)
    }

    let passwordData = (d)=>{
        // console.log(d.target.value)
        setPassword(d.target.value)
    }

    let conformpasswordData = (e)=>{
        // console.log(e.target.value)
        setconformpassword(e.target.value)
    }

    let sendData=(f)=>{
        f.preventDefault()
        console.log(firstName, lastName, email, password, conformpassword)
        let data = {firstName, lastName, email, password, conformpassword}
        if (firstName && lastName && email && (password == conformpassword)){
            axios.post('http://localhost:4000/register', data)
            .then((res)=>{
                alert(res.data.message)
                navigate('/')
            })
        }
        else{
            alert('Invalid Credentials')
        }
    }

    return(
        <div id={zz.signup}>
            <form >
                <h1 className={zz.bb}>SIGN UP</h1>
                <input type="text" className={zz.bb} placeholder='First Name' value={firstName} onChange={firstNameData}/>
                <input type="text" className={zz.bb} placeholder='Last Name' value={lastName} onChange={lastNameData}/>
                <input type="email" className={zz.bb} placeholder='Email' value={email} onChange={emailData}/>
                <input type="password" className={zz.bb}  placeholder='Password' value={password} onChange={passwordData}/>
                <input type="password" className={zz.bb}  placeholder='Conform Password' value={conformpassword} onChange={conformpasswordData}/>
                

                <button className={zz.bb} onClick={sendData}>SIGN UP</button>
                <label>
                    Already a User? <Link to='/'>Login</Link>
                </label>
            </form>
        </div>
    )
}
export default Signup