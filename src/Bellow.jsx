import React from 'react'
import Accordian from './Accordian'

function Bellow({ 
  data = [],
  filterKeyword = '',
  isOpen = false,
  underline = true,
  showWordCount = false,
  onClick = () => {},
  setLastClicked={setLastClicked}
  
 })
  {
    
  return (
    <div className='border-2 border-blue-500 rounded-lg p-4'>
    
   {data
   .filter((d)=>
    d.title.toLowerCase().includes(filterKeyword.toLowerCase())
  )
   .map((d)=>(
    <Accordian 
    key={crypto.randomUUID()}
    title={d.title}
    description={d.description}
    isOpen={isOpen}
    underline={underline}
    showWordCount={showWordCount}
    onClick={onClick} 
   setLastClicked={setLastClicked}
     />
   ))}
    </div>
  );
}

export default Bellow;