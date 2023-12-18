import { useState } from "react"

const Todos=()=>{
    const [list,setList]=useState([])
    const [input,setInput]=useState("")
    const [password,setPassword]=useState("")
    const handleChange=(event)=>{
    setInput(event.target.value)
    }
    const handleClick=(event)=>{
        setPassword(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        const newList=[...list,`${input}${list.length+1}`,`${password}${list.length+1}`]
        setList(newList)
        setInput("")
    setPassword("")
// console.log(list,input)
    }
    const removeAll=()=>{
        setList([])
    }
    const handleRemoveItem=(index)=>{
const newList=list.filter((item,i)=>i!=index)
setList(newList)
    }
   
    return(
        <>
        <h2>Todo List</h2>
        <form onSubmit={handleSubmit}>
<input type="text" value={input} onChange={handleChange}/>
<input type="text" value={password} onChange={handleClick}/>
<button type="submit">Submit</button>
        </form>
        <button onClick={removeAll}>Remove All</button>
        {

            list.length>0? list.map((element,index)=>
            <>
            <table key={index} style={{borderCollapse:"collapse", border:"2px solid red"}} >
                <tr>
                    <th></th></tr>
                        <td>{element}</td>
            </table>
            {/* <ul key={index}><li>
                {element}
                </li>
                </ul>
                <button onClick={()=>handleRemoveItem(index)}>Remove item</button> */}
                </>
                ):<h3>no todos</h3>
        }

        </>
    )
}
export default Todos