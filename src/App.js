import React from 'react';
import Navbar from './components/Navbar'
import Booklist from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToogle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
        <ThemeToogle />
      </ThemeContextProvider> 
    </div>
  );
}

export default App;
