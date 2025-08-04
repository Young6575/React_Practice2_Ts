import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import TailButton from './TailButton';

export default function rest() {
    const [tdata, setTdata] = useState([]);
    let title;
    let writer;
    const titleR = useRef();
    const nameR = useRef();
    const url = "http://localhost:3005/posts";

    const getFetchData = async () => {
        

        // const resp = await fetch(url);
        // const data = await resp.json(); 
        const { data } = await axios.get(url);


        setTdata(data);
    }

    const handelinput = async (e) => {
        e.preventDefault();

        const postData = {
            "title": titleR.current.value,
            "author": nameR.current.value
        }

        const { data } = await axios.post(url,postData);
        titleR.current.value='';
        nameR.current.value='';
        getFetchData();
    }

    const handelDelete = async(id) => {
        console.log(id)
        await axios.delete(`${url}/${id}`);
        getFetchData();
    }

    useEffect(() => {
        getFetchData()

    }, [])

    return (



        <div className='w-full h-full flex flex-col justify-center items-center gap-3'>

            <form className='flex flex-col'>
                <label htmlFor='txt1'>제목</label>
                <input type='text' id="txt1" ref={titleR} className='border-1' />
                <label htmlFor='txt2'>작성자</label>
                <input type='text' id="txt2" ref={nameR} className='border-1' />
                <button type='submitt' onClick={handelinput}>등록하기</button>
            </form>
            <div className='flex gap-3'>
                {tdata.map(item => (
                    <div key={item.id} className='border-1 black text-center'>
                        id : {item['id']} <br />
                        title : {item['title']} <br />
                        author : {item['author']}
                        <TailButton caption={'삭제'} color={'blue'}onHandle={()=>handelDelete(item.id)}/>
                    </div>
                    
                ))
                }
            </div>
        </div>
    )
}
