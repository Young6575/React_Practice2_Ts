import React, { useRef, useEffect, use } from 'react'
import TailButton from './TailButton'

export default function TodoForm({addTodo}) {
    const txtRef = useRef();
    const selRef = useRef();


   const handelok = (e) => {
    e.preventDefault();

    if (txtRef.current.value == "") {
        alert("할일 내용을 입력하세요!");
        txtRef.current.focus();
        return;
    } 
    addTodo(txtRef.current.value,selRef.current.value);
   }

   const handelcancel = () => {
    txtRef.current.value = "";
    txtRef.current.focus();
   }

   useEffect(()=>{
    txtRef.current.focus();

   },[])

  return (
      <form className=' w-8/10 grid grid-cols-5 gap-3 justify-center items-center'>
        <select ref={selRef} id="sel1" className='h-10 bg-white'>
            <option>X</option>
            <option>O</option>
        </select>
        <input ref={txtRef} type='text' className='col-span-2 h-10 bg-white'></input>
        <TailButton caption={"확인"}
                    color={"blue"} 
                    onHandle={handelok} />
        <TailButton caption={"취소"}
                    color={"orange"} 
                    onHandle={handelcancel} />
      </form>
  )
}
