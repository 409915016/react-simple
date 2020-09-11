import React from 'react';
import Navbar from './components/Navbar'
import Booklist from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToogle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
          <ThemeToogle />
        </AuthContextProvider> 
      </ThemeContextProvider> 
    </div>
  );
}

export default App;
