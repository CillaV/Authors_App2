import { Link, navigate } from "@reach/router"
import { useState, useEffect } from "react";
import axios from "axios";



const EditAuthor = (props) =>{

    const {id} = props;

    const [name, setName] = useState("")

    const [errors, setErrors] = useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setName(res.data.name);
            })
            .catch((err)=>{
                console.log(err)
                navigate("/error")
            })
    }, [id])


    const editSubmitHandler = (e)=>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${id}`, {name}) // this is short hand syntax for name:name
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                navigate("/")
            })
            .catch((err)=>{
                console.log(err)
                // console.log(err.response)
                // console.log(err.response.data)
                setErrors(err.response.data.errors)
            })
    }


    return(

        <div>
            
            <header>
                <h1>Favorite Authors</h1>
                <Link to="/">Home</Link>
                <h3>Edit an author: </h3>

            </header>
            
            <form onSubmit={editSubmitHandler}>

                <div>
                    <label>Name: </label>
                    <input value={name} name="name" onChange={(e)=>{ setName(e.target.value)}} type="text"></input>
                </div>

                {errors.name? <span>{errors.name.message}</span> :null} 

                <div>
                    <button onClick={(e)=>{navigate("/")}}>Cancel</button>
                    <button>Submit</button>
                </div>

            </form>
        </div>


    )
}

export default EditAuthor;