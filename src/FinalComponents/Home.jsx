import { useNavigate } from "react-router-dom"

const Home=()=>{
    const navigate=useNavigate();
    return <div style={{textAlign:'center'}}>
        <br />
        <h1>Home Page</h1>
        <br />
        <button style={{cursor:"pointer"}} onClick={()=>navigate("/success")}>Submit Form</button>
    </div>
}
export default Home