import React, { useEffect, useState } from 'react'

export const Mycom = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log('My Component is Mounting...!')

        return ()=>{
            console.log('unMounting..!')
        }
    },[])
    useEffect(()=>{
        console.log('Mycomponent UpdateMount ')
    },[count])
  return (
    <div>
        <p> Count is {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Update</button>
    </div>
  )
}
