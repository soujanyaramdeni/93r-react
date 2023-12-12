import { createRef } from "react"

const Uncontrolled =()=>{
const emailRef=createRef()
const passwordRef=createRef()
const handleSubmit=(event)=>{

event.preventDefault()
const userDetails={
    username:emailRef.current.value,
    password:passwordRef.current.value
}
if(userDetails.username.length>10){
    alert("please enter less than 10 charecters")
}

fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(userDetails)
})
.then(res => res.json())
.then((response=>{
    if(response.message){
        alert(response.message)
    }else{
        alert("login success")
        localStorage.setItem("userDetails",JSON.stringify(userDetails))
    }
}));
}
    return(
        <>
        <h2>Uncontrolled component example</h2>
        <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter email"
      ref={emailRef}
    />
    <small id="emailHelp" className="form-text text-muted">
      We'll never share your email with anyone else.
    </small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
      ref={passwordRef}
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

        </>
    )
}
export default Uncontrolled