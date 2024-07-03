import React,{useState} from 'react'
import './App.css';
import { motion } from "framer-motion";
import  { useEffect, useRef } from 'react';
const App = () => {
  const [input,setInput] = useState("");
  const [result,setResult] = useState(0);

  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current && cursor2Ref.current) {
        const { clientX: x, clientY: y } = e;
        cursorRef.current.style.cssText = `left: ${x}px; top: ${y}px;`;
        cursor2Ref.current.style.cssText = `left: ${x}px; top: ${y}px;`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const handler = e =>{
    setInput(e.target.value);
  }
 
  function Result(){
    try {
      if(input=='')
        {
          return 0;
        }
      setResult(eval(input));
    } catch (error) {
      setResult("error");

      
    }
    
  }
  return (
    <div><div className='Layout1'></div><div className='Layout2'></div><div className='Layout3'></div>
    <div className='Layout4'></div>
      
      
      
      <div className='Layout'>
      <center>
        <input type="text" value={input} name="input" onChange={handler} />
        <br />
        <motion.div
         whileTap={{
          scale: 1.06,
          backgroundColor:"rgba(130, 213, 207, 0.852)",
          
            borderRadius: "40%",
           
        
        }}
        >
        <button onClick={() => Result()} className='resultbutton'>Result</button></motion.div>
        <h5 className='Result'>Result is : {result}</h5>
<motion.div
  
 whileTap={{
  scale: 1.02,
  backgroundColor:"rgba(130, 213, 207, 0.852)",
  
    borderRadius: "40%",
   

}}
>
        <button onClick={() => setInput(input+'1')}>1</button>
        <button onClick={() => setInput(input+'2')}>2</button>
        <button onClick={() => setInput(input+'3')}>3</button>
        <button onClick={() => setInput(input+'4')}>4</button>
        <button onClick={() => setInput(input+'5')}>5</button><br />
        
        <button onClick={() => setInput(input+'6')}>6</button>
        <button onClick={() => setInput(input+'7')}>7</button>
        <button onClick={() => setInput(input+'8')}>8</button>
        <button onClick={() => setInput(input+'9')}>9</button>
        <button onClick={() => setInput(input+'0')}>0</button><br />

        <button onClick={() => setInput(input+'+')}>+</button>
        <button onClick={() => setInput(input+'-')}>-</button>
        <button onClick={() => setInput(input+'*')}>*</button>
        <button onClick={() => setInput(input+'/')}>/</button>
        <button onClick={() => {setInput('');setResult(0)}}>clr</button><br /> 
        </motion.div>
      </center></div>
    </div>
  )
}

export default App;