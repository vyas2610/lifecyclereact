import { useEffect, useState } from 'react';
import './App.css';
import { Mycom } from './Mycom';

function App() {
  const[isVisible,setVisible] = useState(true);
  useEffect(()=>{
    console.log('App is Mounting...!')
  },[])
  return (
    <div className="App">
       {isVisible?<Mycom /> : <></>} 
       <button onClick={()=>{setVisible(!isVisible)}}>Toggle </button>
    </div>
  );  
}

export default App;
