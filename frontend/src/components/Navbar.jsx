// import { Link } from "react-router-dom";
// import { HiMiniBars3CenterLeft} from "react-icons/hi2";
// import { IoSearchOutline } from "react-icons/io5";
// import { HiOutlineUser } from "react-icons/hi";
// import { HiOutlineHeart } from "react-icons/hi";
// import { HiShoppingCart } from "react-icons/hi2";
// import avatarImg from "../assets/avatar.png";
// import { useState } from "react";
// import {useSelector} from "react-redux";
// import { useAuth } from "../context/AuthContext";

// const navigation = [
//   {name: "Dashboard", href:"/dashboard"},
//   {name: "Orders", href:"/orders"},
//   {name: "Cart Page", href:"/cart"},
//   {name: "Check Out", href:"/checkout"},
// ]

// const Navbar = () => {
  
//   const [isDropdowOpen, setIsDropdownOpen] = useState(false);
//   const cartItems = useSelector(state => state.cart.cartItems);
//   console.log(cartItems)

//   const {currentUser, logout} = useAuth()
//   const handleLogOut = () => {
//     logout()
//   }
//   // const logged = () => {
//   //   console.log(currentUser.email)
//   // }

//   return (
//     <header className="max-w-screen-2xl mx-auto px-4 py-6">
//       <nav className="flex justify-between items-center">
//         {/* Left side with icon and About text */}
//         <div className="flex items-center md:gap-16 gap-4">
//           <Link to="/">
//             <HiMiniBars3CenterLeft className="size-6" />
//           </Link>

//           {/* search input*/}
//           <div className="relative sm:w-72 w-40 space-x-2">
//           <IoSearchOutline className="absolute inline-block left-3 inset-y-2"/>
//           <input type = "text" placeholder="Search here" 
//           className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md 
//           focus:outline-none"
//           />
//           </div>
//         </div>


//         {/* Right side with nav items */}
//         <div className="relative flex items-center md:space-x-3 space-x-2">
//           <div>
//             {
//               currentUser ? <>
//               <button onClick={() => setIsDropdownOpen(!isDropdowOpen)}>
//                 <img src={avatarImg} alt="" className={`size-7 rounded-full  
//                   ${currentUser ? 'ring-2 ring-blue-500': ''}`} />
//               </button>
//               {/* show dropdowns */}
//               {
//                 isDropdowOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
//                     <ul className="py-2">
//                       {
//                         navigation.map((item) => (
//                           <li key = {item.name} onClick={() => setIsDropdownOpen(false)}>
//                             <Link to ={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
//                               {item.name}
//                             </Link>
//                           </li>
//                         ))
//                       }
//                       <li>
//                         <button
//                         onClick={handleLogOut}
//                         className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
//                           Logout
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                 )
//               }
//               </> :  <Link to= "/login"><HiOutlineUser className="size-6"/></Link>
//             } 
//             </div>
//           <button className="hidden sm:block">
//             <HiOutlineHeart className="size-6"/>
//           </button>
//           <Link to = "/cart" className="bg-primary p-1 sm:px-6 py-2 flex items-center">
//             <HiShoppingCart 
//             // onClick={logged()}
//             className=""/> {
//               cartItems.length > 0 ? <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> : <span className="text-sm font-semibold sm:ml-1">0</span>
//             }
          
//           </Link>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Navbar;

import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser, HiOutlineHeart } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi2";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import bookscapeLogo from "/bookscapeLogo.png";
import avatarImg from "../assets/avatar.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.cartItems);
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
                <img src={avatarImg} alt="User" className="size-8 rounded-full border-2 border-[#9B1C1C]" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  <ul className="py-2 text-[#9B1C1C]">
                    <li><Link to="/dashboard" className="block px-4 py-2 hover:bg-[#F3E5AB]">Dashboard</Link></li>
                    <li><Link to="/orders" className="block px-4 py-2 hover:bg-[#F3E5AB]">Orders</Link></li>
                    <li><Link to="/cart" className="block px-4 py-2 hover:bg-[#F3E5AB]">Cart</Link></li>
                    <li><Link to="/checkout" className="block px-4 py-2 hover:bg-[#F3E5AB]">Checkout</Link></li>
                    <li><button onClick={handleLogOut} className="block w-full text-left px-4 py-2 hover:bg-[#F3E5AB]">Logout</button></li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login"><HiOutlineUser className="size-6 text-[#9B1C1C]" /></Link>
          )}

          <Link to="/cart" className="text-[#9B1C1C] relative">
            <HiShoppingCart className="size-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#9B1C1C] text-white text-xs px-2 py-1 rounded-full">{cartItems.length}</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
