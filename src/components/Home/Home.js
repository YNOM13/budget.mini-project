import React, {useCallback, useEffect, useState} from "react";
import Balance from "../Balance/Balance";
import Transactions from "../Transactions/Transactions";
import Form from "../Form/Form";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary"
import {getItems ,addItem} from "../../utils/indexdb";
import { memo } from 'react';

const ChildrenComp = memo(() => {
  console.log('here123');
  const [count, setCount] = useState(1)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(prevState => prevState + 1)}>Add</button>
    </div>
  )
})

function Home () {
  const [balance, setBalance] = useState(0)
  const [transactions, setTransactions] = useState([])
  const [counter, setCounter] = useState(0);

   useEffect(()=>{
       getItems().then((item)=>{
           setTransactions(item)
       }).catch(e=>{
           console.error("error",e)
       })
   },[setTransactions])

  const changeFunction = useCallback(() => {
     setCounter(0);
  }, [])


    const onChange = ({value,comment,date}) => {
        const transaction = {
            label:'change',
            value:value,
            id:Date.now(),
            comment:comment,
            date,
        }
        setBalance((prevState)=>{
          return prevState + +value
        })

        setTransactions((prevState)=>[transaction,...prevState])
        addItem(transaction)
    }

    return(
      <ErrorBoundary>
              <hr/>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <span>{counter}</span>
              <button onClick={() => setCounter(counter + 1)}>+</button>
               <hr/>
                <div className="p-2 my-4">
                    <Balance balance={balance}/>
                </div>
                <div>
                    <Form onChange = {onChange}/>
                </div>
                <div className="mt-2 wrapper bg-blue-100 py-3 rounded min-h-[400px]
              max-h-[400px] overflow-auto">
                    <Transactions transactions={transactions}/>
                </div>
              <ChildrenComp changeFunction={changeFunction} />
      </ErrorBoundary>
    )
}

export default Home