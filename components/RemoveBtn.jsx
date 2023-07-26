'use client'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation'

export default function RemoveBtn({id}) {
  
  const router=useRouter();

  const handleDelete=async()=>{
    const confirmed=confirm('Are you sure you want to delete this topic?');
  if(confirmed){
    const res=await fetch(`http://localhost:3000/api/topics?id=${id}`,{
      method:'DELETE',
    })
    if(res.ok){
      router.refresh();
    }
  }
 
}
  return (
    <div>
        <button className='text-red-400' onClick={handleDelete}>
            <HiOutlineTrash size={24}/>
        </button>
    </div>
  )
}
