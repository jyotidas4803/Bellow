import React from 'react'

function Accordion({
    title = "Title",
    description = "Description",
    isOpen = false,
  }) {
  return (
    
        <details className='w-80 bg-blue-200 p-4 rounded-lg m-2' open={isOpen}>
            <summary className='cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:underline'>
                {title}
            </summary>

            <p className='text-gray-700 text-sm mt-2 border-t border-white pt-2 border-width-'>
                {description}
            </p>
        </details>
    
    
  )
}

export default Accordion;