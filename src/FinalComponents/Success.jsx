import { useNavigate } from "react-router-dom";

const Success=()=>{
    
    const navigate=useNavigate();
    return<div style={{textAlign:"center"}}>
        <h1>Form Submitted Successfully</h1>
        <br />
        <button style={{cursor:"pointer"}} onClick={()=>navigate("/")}>Back to Home Page</button>
    </div>
}
export default Success