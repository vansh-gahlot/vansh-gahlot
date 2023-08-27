import { useState } from "react";
import { Button } from "../components/Button"
import { Message } from "../components/Message"

export const CounterPage = ()=>{
    console.log('Counter Fn Call');
    // Hook (State)
  const [count, setCount] =  useState(0);
    //let count = 0;
    const updateCount = (val)=>{
        if(val === '+'){
           //count++;
           //console.log('Count is ', count);
            setCount(count + 1); // State Change
        }
        else{
           // count--;
           // console.log('Count is ', count);
           setCount(count-1) ; // State Change
        }
       
        console.log('Count is ', count);
    }
    return (<div className='container'>
        <Message classname='alert alert-danger' msg="Counter App"/>
        <Message value={count} classname='alert alert-success' msg="Counter Value is "/>
         <Button fn = {updateCount} val  ="+" classname = "btn btn-success me-2"/> 
         <Button fn = {updateCount} val="-" classname = "btn btn-danger"/>   
    </div>)
}