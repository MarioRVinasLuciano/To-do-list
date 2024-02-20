import React from "react";
import { useState } from "react";

export default function ToDoList(){
    const [task, setTask] = useState('');
    const [value, setValue] = useState('');

function handleSubmit(){
    setTask(value);
}


    return(
        <div className="flex flex-col  items-center bg-gray-100 rounded-sm shadow-lg h-96 w-72">
            <div>
                <h1 className="text-2xl mt-4">To do List</h1>
                <hr className="w-full border-2 border-black my-2" />
            </div>
            <div className="flex flex-row">
               <div>
                    <input className="p-2" type="text" value={value} onChange={(e)=> setValue(e.target.value)} placeholder="Write something to do"/> 
               </div>
               <div>
                  <button className="rounded-non bg-green-300 p-2"  onClick={handleSubmit} type="button">Add</button>
               </div>
            </div>
            <div className="mt-4 m-2 h-60 w-60">
                <h1>{task}</h1>
            </div>
        </div>
    )
}