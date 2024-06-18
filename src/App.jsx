import { useReducer, useState } from 'react';
import './App.css';
import { BooksContext, ThemeContext } from './context';
import { cartReducer, initialState } from './reducers/CartReducer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from './components/Main';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <BooksContext.Provider value={{ state, dispatch }}>
          <Main />
          <ToastContainer />
        </BooksContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
