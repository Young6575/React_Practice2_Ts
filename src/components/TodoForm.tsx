import { useRef, useEffect} from 'react'
import TailButton from './TailButton'

import type { MouseEvent } from 'react'
import type { completedT } from '../types/Todo'


interface TodoFormProps {
    addTodo : (text : string | undefined , completed : completedT) => void
}

export default function TodoForm({addTodo} : TodoFormProps) {
    const txtRef = useRef<HTMLInputElement>(null);
    const selRef = useRef<HTMLSelectElement>(null);
    


   const handelok = (e :MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!txtRef.current || !selRef.current) return ;

    if (txtRef.current.value == "") {
        alert("할일 내용을 입력하세요!");
        txtRef.current.focus();
        return;
    } 
    addTodo(txtRef.current.value,selRef.current.value as completedT);
   }

   const handelcancel = () => {
    if (txtRef.current) {
        txtRef.current.value = "";
        txtRef.current?.focus();
    }
    if (selRef.current) selRef.current.value = "X"

   }

   useEffect(()=>{
    txtRef.current?.focus();

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
