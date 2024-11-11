import React from 'react'
import Accordian from './Accordian'

function Bellow() {
    const data = [
        {
            title: 'javascript',
            description: 'javascript is a programming language'
        },
        {
            title: 'python',
            description: 'python is a programming language'
        },
        {
            title: 'react',
            description: 'react is a javascript library'
        },
    
    ]

    const accordianData = [];
    for (let i = 0; i < data.length; i++) {
        accordianData.push(
            <Accordian key={crypto.randomUUID()} title={data[i].title} description={data[i].description} />
        )
    }
  return (
    <div className='border-2 border-blue-500 rounded-lg p-4'>
    {accordianData}
    </div>
  )
}

export default Bellow;