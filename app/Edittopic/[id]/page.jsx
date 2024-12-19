import Editpicform from '@/component/Editpicform'
import React from 'react'

const  Edittopic = () => {
    return(
        <div className='flex flex-col gap-3'>
             <form>
                 <input className='border border-slate-400 px-8 w-[460px] py-2 mt-2'
                 placeholder='enter the topic'
                 />
 
 <input className='border border-slate-400 px-8 w-[460px] py-2 mt-2'
                 placeholder='enter the description'
                 />
 
                 <button className='bg-green-600 border border-slate-600 py-1 rounded-lg w-[460px] text-white mt-1'>Edit topic</button>
             </form>
        </div>
     )
}

export default  Edittopic