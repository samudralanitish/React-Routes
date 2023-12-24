import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./FinalComponents/Home"
// import About from "./FinalComponents/About"
import Users from "./FinalComponents/Users"
import Navbar from "./FinalComponents/Navbar"
import Success from "./FinalComponents/Success"
import UserDetails from "./FinalComponents/UserDetails"
import FirstProject from "./FinalComponents/FirstProject"
import SecondProject from "./FinalComponents/SecondProject"
import NotFound from "./FinalComponents/NotFound"
import React from "react"
import Login from "./FinalComponents/Login"
import { AuthProvider } from "./FinalComponents/auth"
import { Logout } from "./FinalComponents/Logout"
import { PrivateRoute } from "./FinalComponents/PrivateRoute"
import Projects from "./FinalComponents/Projects"
// import About from "../src/FinalComponentPractice/About"
const LazyAbout=React.lazy(()=>import ('./FinalComponents/About'))
const App=()=>{
    return<AuthProvider>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<React.Suspense fallback="Loading..."><LazyAbout/></React.Suspense>}></Route>
            <Route path="/projects" element={<Projects/>}>
                <Route index element={<FirstProject/>}/>
                <Route path="firstProject" element={<FirstProject/>}></Route>
                <Route path="secondProject" element={<SecondProject/>}></Route>
            </Route>
            
            <Route path="/users" element={<PrivateRoute><Users/></PrivateRoute>}></Route>
            <Route path="/success" element={<Success/>}></Route>
            <Route path="users/:userId" element={<UserDetails/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </AuthProvider>
}
export default App