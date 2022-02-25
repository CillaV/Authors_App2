import { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from 'axios';



const AllAuthors = (props) =>{


    const [authorList, setAuthorList] = useState([])


    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setAuthorList(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])



    const deleteAuthor = (idFromBelow) =>{
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setAuthorList(authorList.filter((author, index)=> author._id !== idFromBelow))
            })
            .catch((err)=>{
                console.log(err)
            })
    }


    return(

        

        <div>
            <header>
                <h1>Favorite Authors</h1>
                <Link to="/new">Add an Author</Link>
                <h3>We have quotes by: </h3>

            </header>
            
            
            <table style={{marginLeft: "auto", marginRight: "auto", textAlign: "left"}}>
                <thead>
                    <tr>
                        <td>Author</td>
                        <td>Actions Available</td>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        authorList?

                        authorList.map((author,index)=>(
                            <tr key={index}>
                                <td>{author.name}</td>

                                <td>
                                    <button onClick={(e)=>{navigate(`/edit/${author._id}`)}}>Edit</button>    
                                    <button onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button>    
                                </td>    
                            </tr>                        
                        ))
                        :null
                    }


                </tbody>

            </table>

        </div>

    )
}

export default AllAuthors;