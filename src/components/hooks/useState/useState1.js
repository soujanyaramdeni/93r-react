
import { useState } from "react"
import UseState2 from "./useState2"

const UseState1=()=>{
    const [count,setCount]=useState(0)
    const handleIncreament=()=>{
        setCount(count+1)
    }
    return(
        <>
      <UseState2></UseState2>
          </>
    )
}
export default UseState1