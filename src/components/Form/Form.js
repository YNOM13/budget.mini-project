import React, {useState} from "react";

function Form(props){

  const [formState, setFormState] = useState({
    date:new Date().toISOString().substring(0,10),
    value:'',
    comment:'',
  })
  function onSubmit (e) {
    e.preventDefault()

    if(formState.comment!=='' || formState.value!=='') props.onChange(formState)

    setFormState((prevState)=>{
      return{
        ...prevState,
        value: '',
        comment: '',
      }
    })
  }
  function onChange(e){
    const {value, name} = e.target
    console.log('onchange', e)
    setFormState((prevState)=>{
      return{
        ...prevState,
        [name]:value,
      }
    })
  }

    return (
      <form className="flex justify-center items-center flex-wrap" onSubmit={onSubmit}>
        <input className="bg-amber-100 m-1 p-1 rounded" type="date" name="date" onChange={onChange} value={formState.date}/>

        <input placeholder='comment' className="bg-amber-100 m-1 p-1 rounded"
               type="text" name="comment" onChange={onChange} value={formState.comment}/>

        <input placeholder='sum' className="bg-amber-100 m-1 p-1 rounded"
               type="number" name="value" onChange={onChange} value={formState.value}/>

        <button
          className="bg-green-200 m-1 py-[8px] px-[16px] border-0 rounded shadow-lg
        shadow-indigo-500/50 text-black uppercase text-[10px] font-bold duration-300
        hover:bg-green-300 active:bg-green-400 active:text-black"
        >Add</button>
      </form>
    )
}
export default Form