import React, { useState } from 'react'

const Form = () => {
    const[name , setName] = useState('kani');
    const[des , setDes] = useState('');
   
    // const changeInputTaskName =(e) =>{
    //     console.log(e.target.value);
    //     setName(e.target.value);
    // }
    // const changeInputDescription = (e) =>{
    //     console.log(e.target.value);
    //     setDes(e.target.value);
    // }
    const changeInput = (e) =>{
        if(e.target.name==='taskName'){
            setName(e.target.value);
        }else{
            setDes(e.target.value);
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name,des);
        
    }
  return (
    <div>Form
        <form onSubmit={handleSubmit}>
            <input name="taskName" placeholder='taskName' value={name} onChange={changeInput}></input>
            <input name="description" placeholder='description' onChange={changeInput}></input>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form