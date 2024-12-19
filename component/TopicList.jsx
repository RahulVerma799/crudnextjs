import React from 'react'
import RemoveBtn from './RemoveBtn'
import { HiPencilAlt } from "react-icons/hi";
import Link from 'next/link';
const getTopic=async()=>{
    try{
    const res= await fetch("http://localhost:3000/api/topic",{cache:"no-store"});

    if(!res.ok){
        throw new Error("Failed to fetch topic")
    }

    return res.json();
}
catch(error){
    console.log('error in loacdinG'+error);
}

}


const TopicList =async() => {
    const {topic}=await getTopic();
  return (
    <>
    {topic.map((t)=>(
    <div className='flex justify-between p-4 border border-slate-300 mt-1 gap-5 items-start'>
        <div>
            <h2 className='font-bold text-2xl'>{t.title}</h2>
            <h2>{t.description}</h2>
        </div>

        <div className='flex flex-row gap-4 text-2xl'>
            <RemoveBtn id={t._id}/><Link href={`/Edittopic/${t._id}`}><HiPencilAlt /></Link>

        </div>
    </div>
    ))}
    </>
  )
}

export default TopicList