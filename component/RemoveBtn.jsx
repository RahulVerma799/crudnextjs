'use client'

import React from 'react'

import { MdOutlineDelete } from "react-icons/md";
import {useRouter} from 'next/navigation';

const RemoveBtn = ({id}) => {
    const router=useRouter();
    const removeTopic=async()=>{
        const confrimed=confirm("Are you sure");

        if(confrimed){
            await fetch(`http://localhost:3000/api/topic?id=${id}`,{
                method:"DELETE"
            });

            if(res.ok){
                router.refresh();
            }
        }
    }

  return (
    <div><MdOutlineDelete onClick={removeTopic} /></div>
  )
}

export default RemoveBtn