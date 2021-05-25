import React, {useState} from 'react'
import './IncreDecre.css';
function IncreDecre(props) {

    const [count,setCount] =useState(0);
    return (
        <div style={{float:"inline-end"}} align="center">
        
       
           <h2 style={{color:"Blue"}}>Lets Start!</h2>
            <h2>{count}</h2>
            <button style={{color:"green"}}  onClick={()=>{
                setCount(count+1)
            }}> Increment </button>

        <button style={{color:"balck"}} onClick={()=>{
                setCount(0)
            }}> Reset </button>

        <button style={{color:"red"}} onClick={()=>{
                setCount(count-1)
            }}> Decrement </button>
            
        </div>
        
    );
}
export default  React.memo(IncreDecre);


