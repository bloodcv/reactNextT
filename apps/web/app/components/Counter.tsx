"use client";


import {
 useAtom
} from "jotai";


import {
 countAtom
} from "@/store/counter";


export default function Counter(){


 const [
   count,
   setCount
 ] = useAtom(countAtom);


 return (

  <button
   onClick={()=>setCount(v=>v+1)}
  >

   {count}

  </button>

 )

}