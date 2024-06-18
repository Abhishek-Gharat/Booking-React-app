import { useState, useContext } from "react";
import { FaRegBell, FaRegMoon } from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineWbSunny } from "react-icons/md";
import { ImBooks } from "react-icons/im";

import { BooksContext, ThemeContext } from "../context";
import CartDetails from "../pages/books/CartDetails";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { state, dispatch } = useContext(BooksContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function handleCartShow() {
    if (state.cartData.length > 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  }

  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="/" className="flex gap-2 left-2 items-center flex-2"> {/* Added flex-1 class to center align */}
          <ImBooks className="w-8 h-8" />
          <span className="font-bold uppercase">BOOKING APP</span>
        </a>

        <ul className="flex items-center space-x-7">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <FaRegBell style={{ color: 'red' }} />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              {darkMode ? <MdOutlineWbSunny /> : <FaRegMoon />}
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block relative"
              href="#"
              onClick={handleCartShow}
            >
              <MdOutlineShoppingCart />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
