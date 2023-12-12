import axios from "axios"
import { useState } from "react"
const UseState2=()=>{
    const [data,setData]=useState([])
    const [timer,setTimer]=useState(0)
    const [circle,setCirle]=useState(0)
    // const handleClick=()=>{
    //     axios.get("https://fakestoreapi.com/products")
    //     .then((response)=>setData(response.data))
    //     .catch(err=>alert(err.message))
    // }
    // const handleTimer=()=>{
    //     setInterval(()=>{

    //         // console.log(timer)
    //         setTimer(prevState=>prevState+1)
    //     },1000)
    // }
    const handleCircle=()=>{
        setCirle(circle+1)
    }
    return(
        <>
        <br/>
        <center>
          {/* <h2 style={{color:timer>100?"red":"black"}}>{timer}</h2> */}
        <div onClick={handleCircle} style={{backgroundColor:circle>3?"red":"black",color:"white",borderRadius:"50%", width:"65px",height:"65px"}}>{circle}</div>
        <br/>
        <button onClick={handleCircle}>click to add circle </button> </center>
        {/* <h2> usestate2 </h2>
        <button onClick={handleClick}>click to load data</button>
        {
            data.length>0 ?
            data.map((element)=>{
                return(
                    <>
                    <h4>{element.title}</h4>
                    </>
                )
            })
            :null
        } */}
        </>
    )
    
    }

export default UseState2