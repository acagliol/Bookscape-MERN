import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg"; // Replaced Avatar Image with Profile Icon
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import bookscapeLogo from "/bookscapeLogo.png";

// Define navigation links for dropdown menu
const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/cart" },
  { name: "Checkout", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { currentUser, logout } = useAuth();
  
  const handleLogOut = () => logout();

  return (
    <header className="bg-[#FFF8E1] text-[#9B1C1C] py-4 px-6">
      <nav className="flex justify-between items-center max-w-screen-2xl mx-auto">
        
        {/* Left Side: Logo */}
        <div className="flex items-center gap-6">
          <Link to="/">
            <img src={bookscapeLogo} alt="Bookscape" className="h-6" />
          </Link>
        </div>

        {/* Center Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-[#9B1C1C] text-lg font-semibold">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li><Link to="/shop" className="hover:underline">Shop</Link></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {currentUser ? (
            <div className="relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <CgProfile className="size-8 text-[#9B1C1C] hover:text-[#7A1515]" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  <ul className="py-2 text-[#9B1C1C]">
                    {navigation.map((item) => (
                      <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                        <Link to={item.href} className="block px-4 py-2 hover:bg-[#F3E5AB]">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button onClick={handleLogOut} className="block w-full text-left px-4 py-2 hover:bg-[#F3E5AB]">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <CgProfile className="size-6 text-[#9B1C1C] hover:text-[#7A1515]" />
            </Link>
          )}

          {/* Shopping Cart */}
          <Link to="/cart" className="relative text-[#9B1C1C]">
            <HiShoppingCart className="size-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#9B1C1C] text-white text-xs px-2 py-1 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
