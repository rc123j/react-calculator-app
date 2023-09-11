import React, { useState } from 'react'
import './app.css';

const App = () => {

const [value, setValue] = useState('');


function handleDelete(){

  setValue(value.slice(0 , -1));
}

function handleClear(){

  setValue('');
}

function handleEqualto() {
  try {
   
    const result = eval(value);

    // Check if the result is a valid number
    if (!isNaN(result)) {
      setValue(result.toString());
    } else {
      setValue('Error');
    }
  } catch (error) {
    // Handle any errors that may occur during evaluation
    setValue('Error');
  }
}


  return (
    <>
    <div className='container'>
      <div className='calculator'>
        <form action=''>
          <div className='display' >
            <input type='text' 
            value={value}
            readOnly/>
          </div>

          <div>
            <input type='button' value='AC'onClick={handleClear}/>
            <input type='button' value='DE' onClick={handleDelete}/>
            <input type='button' value='.'onClick={e=> setValue(value + e.target.value)}/>
            <input type='button' value='/'onClick={e=> setValue(value + e.target.value)}/>
         </div>
         
         <div>
            <input type='button' value='7'onClick={e=> setValue(value + e.target.value)}/>
            <input type='button' value='8'onClick={e=> setValue(value + e.target.value)}/>
            <input type='button' value='9'onClick={e=> setValue(value + e.target.value)}/>
            <input type='button' value='*'onClick={e=> setValue(value + e.target.value)}/>
         </div>

         <div>
            <input type='button' value='4'onClick={e=> setValue(value + e.target.value)}/>
            <input type='button' value='5'onClick={e=> setValue(value + e.target.value)}/>
            <input type='button' value='6'onClick={e=> setValue(value + e.target.value)}/>
            <input type='button' value='+'onClick={e=> setValue(value + e.target.value)}/>
         </div>

         <div>
            <input type='button' value='1'onClick={e=> setValue(value + e.target.value)}/>
            <input type='button' value='2'onClick={e=> setValue(value + e.target.value)}/>
            <input type='button' value='3'onClick={e=> setValue(value + e.target.value)}/>
            <input type='button' value='-'onClick={e=> setValue(value + e.target.value)}/>
         </div>
         <div>
            <input type='button' value='00'onClick={e=> setValue(value + e.target.value)}/>
            <input type='button' value='0'onClick={e=> setValue(value + e.target.value)}/>
            <input type='button' value='=' className='equal' onClick={handleEqualto}/>
         </div>

         </form>
      </div>
    </div>
    
    </>
  )
}

export default App