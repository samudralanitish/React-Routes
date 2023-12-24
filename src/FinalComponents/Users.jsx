import { Link } from 'react-router-dom'
import data from './UserData'

const Users=()=>{

    return <div style={{textAlign:'center'}}>
        <h1>Users Page</h1>
        <div className='container'>
            {
                data.map((eachObj)=>{
                    const{id,name,email}=eachObj
                    return<Link to={`/users/${id}`} key={id}>
                        <article className='card'>
                            <h1>{name}</h1>
                            <h3>{email}</h3>
                        </article>
                    </Link>
                })
            }
        </div>
    </div>
}
export default Users