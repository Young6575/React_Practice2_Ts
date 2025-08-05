import TailBall from "../components/TailBall" 
import TailButton from "../components/TailButton"

import { useState } from "react";

import type { ReactNode } from "react";


export default function Lotto() {
  const [lottoTag, setLottoTag] = useState<ReactNode[]>([]);

  const handleClick = () => {
    let num : number[] = [];

    //중복되지 않는 7개 숫자
    while (num.length < 7) {
      let randomnum = Math.floor(Math.random()*45) + 1;
      
      if (!num.includes(randomnum)) num.push(randomnum);
    }
    //보너스 
    let bonus = num.splice(-1);

    //num배열 정렬
    num.sort((a,b) => a-b);

    //화면 출력을 위한 배열
    let lotto : (number | string)[] = [...num, '+' , ...bonus];
    let tmTag : ReactNode[] = lotto.map(item => typeof item == 'string' ? <span className="font-bold text-3xl" key='plus'>{item}</span> 
                                                                            : <TailBall key={`n${item}`} 
                                                                                        n={item}/>);

    // console.log(lottoTag);
    setLottoTag(tmTag);
  }
  return (
    <div className="w-full flex flex-col justify-center items-center">

      <div className="flex justify-center items-center my-10 h-10">
        {lottoTag}
      </div>
      

      <div className="h-20">
        <TailButton caption="로또번호생성"
                    color="orange"
                    onHandle={handleClick}/>
      </div>
    </div>
  )
}
