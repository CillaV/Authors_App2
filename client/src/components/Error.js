import React from "react";
import { Link } from "@reach/router";



const Error = (props) =>{





    return(

        <div>
            <p>We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?</p>
            <Link to={"/new"}>Add Author</Link>
        </div>


    )
}

export default Error;