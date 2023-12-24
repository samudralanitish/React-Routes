import { NavLink } from "react-router-dom"
import { useAuth } from "./auth"
import '../index.css'
const Navbar=()=>{
    const{name,logout}=useAuth()
    return <section style={{textAlign:"center"}}>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to={"/users"}>Users</NavLink>
            
            {
                name?<NavLink to="/logout" onClick={logout} >Logout</NavLink>:<NavLink to="/login">Login</NavLink>

            }
            <NavLink style={{color:"orangered"}} id="sample">{name}</NavLink>
        </nav>
    </section>
}
export default Navbar