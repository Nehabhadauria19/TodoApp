import React, { useState } from 'react'
import "../App.css"
<link
  href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
  rel="stylesheet"
/>


const TodoInput = () => {
    const[task,setTask]=useState("") // for inp tag
    const[taskListed,setTaskListed]=useState([]) // for button
    const[edit,setEdit]=useState(false)
    const[id,setId]=useState("")

    let addButton=(e)=>{
        e.preventDefault()
        setTaskListed([...taskListed,task]) //store previous elem along with current elem 
        setTask("")
    }
    let DeleteClick=(id)=>{
         setTaskListed([...taskListed].filter((ele,eleId)=>eleId!==id))
       
    }
    let EditClick=(id)=>{
      const items= taskListed.find((ele,eleId)=>eleId===id)
      setTask(items)
      setEdit(!edit)
      setId(id)
    }
    let EditButton=()=>{
      taskListed.splice(id,1,task)
      setEdit(!edit)
      setTask("")
      
      
    }
    
   
     
  return (
    <form className='main-container' onSubmit={addButton}> 
    <h3 className='head'>ToDoiee App</h3>
    {edit ? <input className='inputs' type="text" placeholder='Edit your task' onChange={(e)=>setTask(e.target.value)} value={task}/>
    :<input className='inputs' type="text" placeholder='Add your task' onChange={(e)=>setTask(e.target.value)} value={task}/>}
    {edit ? <button className='upd' onClick={EditButton}>Update</button>
   : <button className='btn'>ADD</button>}
    <br />
    <ol>
     {taskListed.map((item,index)=>(
      <li className='list'>{item} <span className='edit'onClick={()=>EditClick(index)}>Edit</span> <span className='delete' onClick={()=>DeleteClick(index) }>Delete</span></li>
      
     ))}
     </ol>
     
      
     
    </form>
  )
}

export default TodoInput
