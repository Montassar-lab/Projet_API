import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

const Userdetails =()=>{

    const {id} = useParams()
    const [user,setUser]=useState({})
    const [loading,setLoading]= useState(true)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .then(()=> setLoading(false))
        .catch((err)=>console.log(err))
    },[id])
    
    return(
        <div className="Userdetails">
            {
                        loading ? <h1>STANA CHWAYA</h1> 
                        :<>
                        <h1 className="Userdetailsname">Name : {user.name}</h1>
                        <br/>
                        <h3 className="Userdetailsdetails">Details : </h3>
                        <h2>username : {user.username}</h2>
                        <h2>email : {user.email}</h2>
                        <h3>Adress: {user.address.suite},{user.address.street},{user.address.city},{user.address.zipcode}</h3>
                        <h3>phone : {user.phone}</h3>
                        <h3>Company Name : {user.company.name}</h3>
                        <h3>Occupation : {user.company.bs}</h3>
                        <h3>Description : {user.company.catchPhrase}</h3>
                        <h3>website : {user.website}</h3>
            
                        <Button variant="outline-info"><Link to='/Userlist'>Back to users list</Link></Button>
                        </>            
            }
        </div>
    )
}

export default Userdetails