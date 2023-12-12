import { useState } from "react"

const Controlled=()=>{
    const [username,setUsername]=useState("")
    const [usernameError,setUsernameError]=useState()
    const [password,setPassword]=useState("")
    const handleSubmit=(event)=>{
        event.preventDefault()
        const details={
            username:username,
            password:password
        }
        console.log(details)
    }
    const usernameHandler=(event)=>{
        setUsername(event.target.value)
        if(event.target.value.length>5){
            alert("please enter<5 username charecters")
            setUsernameError("please enter<5 username charecters")
        }else{
            setUsernameError("")
        }
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value)
        if(event.target.value.length>5){
            alert("please enter<5 username charecters")   
        }else{
        }
    }
    return(
        <>
        <h2>Controlled</h2>
        <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input
      type="text" 
      className="form-control" 
      id="exampleInputEmail1"
      value={username} onChange={usernameHandler} />
       <label htmlFor="exampleInputEmail1" style={{color:"red"}}>{usernameError}</label>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
      value={password} onChange={passwordHandler}
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
        </>
    )
}
export default Controlled