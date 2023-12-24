import { NavLink, Outlet } from "react-router-dom"

const Projects=()=>{
    return <div style={{textAlign:'center'}}>
        <br />
        <h1>Projects Page</h1>
        <br />
        <nav>
            <NavLink to="/projects/firstProject">FirstProject</NavLink>
            <NavLink to="/projects/secondProject">SecondProject</NavLink>
        </nav>
        <br />
        <Outlet/>
    </div>
}
export default Projects