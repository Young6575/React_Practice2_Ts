import Foodcard from './Foodcard'
import fooddata from './fooddata.json'
import TailButton from '../components/TailButton'
import { type ReactNode, useState } from 'react'

import type { FoodItem } from '../types/Food'

export default function FoodMain() {

    const [tag, settag] = useState<ReactNode[]>([]);

    let group : string[] = fooddata.map( item => item["운영주체 분류"].replaceAll(' ',''))
    group = [...new Set(group)]

    //구분
    let group1 : string[] = fooddata.map (item => item["구분"].replaceAll(' ',''))
    group1 = [...new Set(group1)]



    const handleClick = (item : string)   => {
        
        
        const name = item;
        let itemarr : FoodItem[] = fooddata.filter(item => item["구분"].replaceAll(' ','') == name);
        let itemtag : ReactNode[] = itemarr.map(item => <Foodcard key={item["사업장명"]} item={item} />)
        settag(itemtag);
        
    }
  
    return (

    <div className='flex flex-col justify-start items-center
                    w-full ' >
        <div>
            {group1.map(item => <TailButton key={item} 
                                            caption={item}
                                            color="blue"
                                            onHandle = {() => handleClick(item)} />)

            }
        </div>


        <div className='w-6/10 grid grid-cols-1 xl:grid-cols-2 gap-4'>
         


        { tag }
        </div>

    </div>
  )
}
