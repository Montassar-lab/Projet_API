import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"



const Userslist =()=>{

    const [users,setUsers]=useState([])
    const [loading,setLoading]= useState(true)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .then(()=> setLoading(false))
        .catch((err)=>console.log(err))

    },[])
    return(
        <div>
            <h2>List of Users :</h2>
            <div className="Userslist">
            {
                loading ? <h1>STANA CHWAYA</h1> 
                : users.map((el)=>
                       
                        <Link to={`/Userdetails/${el.id}`}>
                            <Card style={{ width: '18rem' }} >

                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />

                            
                                
                                <Card.Body>

                                    <Card.Title>{el.name}</Card.Title>
                                    <Card.Text> {el.email} </Card.Text>

                                </Card.Body>
                            </Card>
                            <br/>

                        </Link>
                            )
            }
            </div>
        </div>
    )
}

export default Userslist