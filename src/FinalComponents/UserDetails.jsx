import { useParams } from "react-router-dom"
import data from "./UserData"
const UserDetails=()=>{
    const {userId}=useParams();
    const obj= data.find((eachObj)=>eachObj.id==userId)
    return <div className="card" style={{ margin:"40px auto", maxWidth:"300px", borderRadius:"20px"}}>
        <h3>Name: {obj.name}</h3>
        <h3>Email: {obj.email}</h3>
        <h3>Username: {obj.username}</h3>
        <h3>Phone no. : {obj.phone}</h3>
    </div>
}
export default UserDetails