import { useEffect, useState } from 'react';
import { ThemeContextProvider } from './Contexts/Theme';
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';


function App() {
  
  const [themeMode, setThemeMode] = useState('light')

  const lightMode=()=>{
    setThemeMode("light");
  }

  const darkMode = ()=>{
    setThemeMode("dark");
  }

//Change in theme

  useEffect(()=>{
    const ele = document.querySelector('html');
    ele.classList.remove('light', 'dark');
    ele.classList.add(themeMode);

    // This will trigger a re-render when the classList is updated
    // ele.offsetHeight;
    // eslint-disable-next-line no-unused-expressions
    ele.offsetHeight;
  }, [themeMode])
  


  return (
    <ThemeContextProvider value={{themeMode, lightMode, darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>

          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
