import { useState } from 'react';
import React from 'react';
import items from './assets/items.json';
import Bellow from './Bellow';

function App() {
 const [lastClicked, setLastClicked] = useState('No Click Yet');



return (

    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-center text-stone-900">last Clicked: {lastClicked}</h1>
      <Bellow
      data={items}
      filterKeyword=""
      isOpen={false}
      underline={true}
      showWordCount
      onClick={(value) => console.log(value)}
      setLastClicked={setLastClicked}
         />
    </div>
  
);
}

export default App;