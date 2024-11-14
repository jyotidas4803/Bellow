import React from 'react'
import Accordian from './Accordian'

function Bellow({ 
  data = [], 
  filterKeyword = "", 
  isOpen = false
 })
  {
    
// const accordians= data.map(({title,descrition})=>(
//     <Accordian 
//     key={crypto.randomUUID()}
//     title={title}
//     description={descrition}
//      />
// )

// )

// data.forEach((obj,index)=>
//     accordians.push(
//     <Accordian 
//     key={index}
//     title={obj.title}
//     description={obj.description}
//      />
// )
// );
  return (
    <div className='border-2 border-blue-500 rounded-lg p-4'>
        {/* <input type='text' placeholder='Search' id='search' className='border-2 border-blue-500 rounded-lg p-2 m-2 w-80' /> */}
   {/* {data.map((d)=>(
    <Accordian 
    key={crypto.randomUUID()}
    title={d.title}
    description={d.description}
     />
   ))} */}

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
     />
   ))}
    </div>
  )
}

export default Bellow;