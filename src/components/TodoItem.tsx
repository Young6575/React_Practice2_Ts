import React, { useEffect, useRef } from 'react'
import TailButton from './TailButton'
import { useState } from 'react'


export default function TodoItem({item, onDelete, onPatch}) {


  return (
    <div className='w-full flex flex-col items-center mt-3'>
      <form className='flex justify-between w-8/10 border-1 rounded-2xl'>
        <div className='flex justify-center items-center'>
 
        <input type='checkbox' checked={item.completed == 'O' ? true : false} onChange={(e)=>{onPatch(item.id,e.target.checked);}}  className='ml-2 mr-2 w-5 h-10 accent-green-500 text-white'></input>
        <div className={item.completed == 'O' ? 'line-through text-red-500' : ''}>{item.text}</div>
        </div>
        <TailButton caption={"삭제"}
                    color={"blue"} 
                    onHandle={()=> onDelete(item.id)} />
      </form>
    </div>
  )
}
