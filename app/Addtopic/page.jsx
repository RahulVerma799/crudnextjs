'use client'
import react, { useState } from 'react'


export default function Addtopic(){
     const [title,setTitle]=useState("");
     const [description,setDescription]=useState("");

     const handleSubmit=async(e)=>{
        e.preventDefault();

        if(!title||!description){
            alert("Title and description are required");
            return;
        }

        try{
            await fetch('http://localhost:3000/api/topic',{method:"POST",headers:{"Content-type":"application/json"},
                body:JSON.stringify({title,description})
            })
            alert("successfully added");

        }catch(error){
            console.log(error)

        }

     }

    return(
       <div className='flex flex-col gap-3'>
            <form>
                <input onChange={(e)=>setTitle(e.target.value)} value={title} className='border border-slate-400 px-8 w-[460px] py-2 mt-2'
                placeholder='enter the topic'
                />

<input onChange={(e)=>setDescription(e.target.value)}  value={description} className='border border-slate-400 px-8 w-[460px] py-2 mt-2'
                placeholder='enter the description'
                />

                <button onClick={handleSubmit} className='bg-green-600 border border-slate-600 py-1 rounded-lg w-[460px] text-white mt-1'>Add</button>
            </form>
       </div>
    )
}