import React from 'react';
import items from './assets/items.json';
import Bellow from './Bellow';

function App() {
 


return (
  debates && (
    <div className="flex justify-center items-center h-screen">
      <Bellow
      data={items}
      filterKeyword=""
      isOpen={false}
      underline={true}
      showWordCount
      onClick={(value) => console.log(value)}
         />
    </div>
  )
);
}

export default App;