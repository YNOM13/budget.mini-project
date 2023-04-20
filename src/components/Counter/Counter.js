import React, {useEffect, useState} from "react";

export default function Counter() {
  const [counter, setCounter] = useState(-12)
  const [step, setStep] = useState(0)

  function showValue() {
    setTimeout(()=>{
      alert(counter)
    },3000)
  }

  useEffect(()=>{
    console.log('render', counter)
    document.title = `Clicked ${counter}`

    setStep((prevState)=>{
      return prevState + 1
    })
  },[counter, setStep])

  useEffect( () => {
    console.log('step')
  }, [step])

  return(
    <div className="bg-blue-300 p-2 flex justify-center items-center flex-col min-h-[300px]">
      <h2 className="font-bold uppercase">Counts: {counter}</h2>
      <div className="m-2">

        <button
          onClick={()=>setCounter((prevState)=>prevState-step)}
          className="bg-red-200 m-1 py-[8px] px-[16px] border-0 rounded shadow-lg
        shadow-indigo-500/50 text-black uppercase text-[10px] font-bold duration-300
        hover:bg-red-300 active:bg-red-400 active:text-black"
        >Sub</button>

        <button
          onClick={()=>setCounter((prevState)=>prevState+step)}
          className="bg-green-200 m-1 py-[8px] px-[16px] border-0 rounded shadow-lg
        shadow-indigo-500/50 text-black uppercase text-[10px] font-bold duration-300
        hover:bg-green-300 active:bg-green-400 active:text-black"
      >Add</button>
      </div>
      <div className="m-2">
        <button
          onClick={showValue}
          className="bg-purple-200 m-1 py-[8px] px-[16px] border-0 rounded shadow-lg
        shadow-indigo-500/50 text-black uppercase text-[10px] font-bold duration-300
        hover:bg-purple-300 active:bg-purple-400 active:text-black"
        >Show Message</button>
      </div>
      <div>
        <input className="bg-amber-100 m-1 p-1 rounded" type="number" name="step"
               onChange={(e)=>setStep((+e.target.value))} value={step}/>
      </div>
    </div>
  )
}