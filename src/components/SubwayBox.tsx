import React from 'react'
import scode from '../db/scode.json'

export default function SubwayBox({data, idx}) {
    const str = data.controlnumber

    const year = str.slice(0,4);
    const month = str.slice(4,6);
    const day = str.slice(6,8);
    const time = str.slice(8,10);


  return (
    
    <div>


        <div>
            {data['site']}{data['city']} (시각 : {year}. {month}. {day} {time}시 )
        </div>
    
        <div className='w-full grid grid-cols-9 gap-1'>
            {
            Object.keys(scode).map(key => (
            <div key={key} className='border-1 black'>
                <div key={key} className={`text-center text-white ${idx % 2 == 0 ? 'bg-green-700' : 'bg-red-600'}`}>
                    {scode[key].name}<br/> 
                    ({key}) 
                </div>
                <div className='border-1 black text-center '>
                    {data[key]}{scode[key].unit}
                </div>
            </div>
            ))
            }
            
        </div>
    </div>

  )
}
