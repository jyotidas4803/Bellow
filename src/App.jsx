import React from 'react';

import Bellow from './Bellow';

function App() {
  const debates = [
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

];


return (
  debates && (
    <div className="flex justify-center items-center h-screen">
      <Bellow data={debates} filterKeyword="" isOpen />
    </div>
  )
);
}

export default App;