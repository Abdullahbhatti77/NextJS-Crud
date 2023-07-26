"use client"
import {useState} from 'react';
import {useRouter} from 'next/navigation';

export default function AddTopic(){
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const router=useRouter();

    const handleSubmit=async(e)=>{
        e.preventDefault();

        if(!title || !description){
            alert('Please fill all the fields');
            return;
        }
        try{
            const res=await fetch('/api/topics',{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({title,description})
            })
            if(res.ok){
                router.push('/');
            }else{
                alert('Something went wrong');
            }
        } catch(err){
            console.log(err)
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input onChange={(e)=>setTitle(e.target.value)} 
                value={title}
                type="text"
                placeholder="Topic Title"
                className="border border-slate-500 px-8 py-2"/>

                <input
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
                type="text" 
                placeholder="Topic Description" 
                className="border border-slate-500 px-8 py-2"/>

                <button type='submit' className="bg-green-300 text-white px-6 py-3 w-fit rounded-lg">Add Topic</button>
            </form>
        </div>
    )
}