import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginIn from './LoginIn'
import SignUp from './SignUp'
import Home from './Home'

const App = ()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route element={<LoginIn/>} path='/' />
                <Route element={<SignUp/>} path='/signup'/>
                <Route element={<Home/>} path='/home'/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App