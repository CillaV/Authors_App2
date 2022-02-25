import { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";



const NewAuthor = (props) =>{

    
    const [name, setName] = useState("")
    
    const [errors, setErrors] = useState({})


    const newSubmitHandler = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/authors", {name})
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
                <h3>Add a new author: </h3>

            </header>


            <form onSubmit={newSubmitHandler}>

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

export default NewAuthor;