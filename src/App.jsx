import { useState } from 'react';
import NavigationMenuDemo from './NavigationMenuDemo';
import Nav from './nav';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className='p-4 supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/90 shadow-sm backdrop-blur'>
        <NavigationMenuDemo />
      </header>
    </>
  );
}

export default App;
