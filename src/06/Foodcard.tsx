import bank from '../assets/bank.png'
import busan from '../assets/busan.png'
import market from '../assets/market.png'
import { useState } from 'react'

import type { FoodItem } from '../types/Food'

interface FoodcardProps {
  item : FoodItem
}

export default function Foodcard({item} : FoodcardProps) {
  const [flag, setflag] = useState<boolean>(false);

  const handleToggle = () => {
    setflag(!flag);
  }
  
  
    return (



    <div className='flex w-full h-70 border-zinc-200 border-2 mb-5'>
        
        <div className='w-1/3 h-full'>
            
            <img className='w-full h-3/4' src = {
                item["구분"] == "기초푸드뱅크" ? bank
                : item["구분"] == "광역지원센터" ? busan : market
            } />
        </div>

        <div className='w-3/4 flex flex-col justify-between items-start h-full'>
                
                <div className='flex flex-col justify-start items-start mt-4'> 
                    <h1 className='font-bold text-4xl'>{item.사업장명}</h1>
                    <h2 className='font-bold text-3xl mt-2'>{item.운영주체명}</h2>
                    <p className='text-left text-2xl mt-2'>{item["사업장 소재지"]}</p>
                </div>
                <div className='w-full bg-amber-800 h-12 mt-4 px-4
                         text-white text-left text-xl
                         flex items-center font-bold
                          hover:cursor-pointer'
              onClick={handleToggle}>
                    {flag && item["연락처(대표번호)"]}
                </div>
        </div>

    </div>
  )
}
