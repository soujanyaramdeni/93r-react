

import axios from "axios"
import Navbar from "../../components/navbar/NavBar"
import React, { useState } from "react"
import { Link } from "react-router-dom"


const HomeScreen = () => {
    const [data,setData]=useState([])
    const handleClick=()=>{
      axios.get("https://fakestoreapi.com/products")
      .then(response=>setData(response.data))
    }
    return (
        <>
        <Navbar></Navbar>
        <button onClick={handleClick}>Click to load Products</button>
            {
                data.length>0
                ?
                data.map(element=>{
                    return(
                        <React.Fragment key={element.id}>
                        <p>{element.title}</p>
                        <img src={element.image} alt={element.id} width={100} height={100}></img>
                        <button>
                            <Link to={`/product/${element.id}/${element.category}`} >View Details</Link>
                        </button>
                        </React.Fragment>
                    )
                })
                :
                <h2>No Products</h2>
            }
            
            <h2>HomeScreen</h2>
            
        </>

    )
}
export default HomeScreen