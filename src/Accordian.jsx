import React from 'react'

function Accordion({
    title = 'Title',
    description = 'Description',
    isOpen = false,
    underline = true,
    showWordCount = false,
    onClick = () => {},
  }) {
  return (
    
        <details className='w-80 bg-blue-200 p-4 rounded-lg m-2' 
        open={isOpen} 
         onClick={() => onClick(title)}>
            <summary  className={` cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg font-bold ${underline && "underline"}`}>
            <span className={`${underline && 'hover:underline'}`}>{title}</span>
               <span className='ml-2 font-thin no-underline text-gray-300'>
               {showWordCount && `${description.split(' ').length} words`}
                     </span>
            </summary>

            <p className='text-gray-700 text-sm mt-2 border-t border-white pt-2 border-width-'>
                {description}
            </p>
        </details>
    
    
  );
}

export default Accordion;