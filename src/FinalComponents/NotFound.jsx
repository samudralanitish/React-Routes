import { useNavigate } from "react-router-dom"

const NotFound=()=>{
    const navigate=useNavigate()
    return<center>
        <br />
        <h1>Error: 404 Not Found </h1>
        <br />
        <button onClick={()=>navigate("/")}>Back to Home Page</button>
    </center>
}
export default NotFound