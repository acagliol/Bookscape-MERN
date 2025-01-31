// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { getImgUrl } from '../../utils/getImgUrl';
// import { clearCart, removeFromCart } from '../../redux/features/cart/cartSlice';

// const CartPage = () => {
//     const cartItems = useSelector(state => state.cart.cartItems);
//     const dispatch =  useDispatch()

//     const totalPrice =  cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);

//     const handleRemoveFromCart = (product) => {
//         dispatch(removeFromCart(product))
//     }

//     const handleClearCart  = () => {
//         dispatch(clearCart())
//     }
//     return (
//         <>
//             <div className="flex mt-12 h-full flex-col overflow-hidden bg-white shadow-xl">
//                 <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
//                     <div className="flex items-start justify-between">
//                         <div className="text-lg font-medium text-gray-900">Shopping cart</div>
//                         <div className="ml-3 flex h-7 items-center ">
//                             <button
//                                 type="button"
//                                 onClick={handleClearCart }
//                                 className="relative -m-2 py-1 px-2 bg-red-500 text-white rounded-md hover:bg-secondary transition-all duration-200  "
//                             >
//                                 <span className="">Clear Cart</span>
//                             </button>
//                         </div>
//                     </div>

//                     <div className="mt-8">
//                         <div className="flow-root">

//                             {
//                                 cartItems.length > 0 ? (
//                                     <ul role="list" className="-my-6 divide-y divide-gray-200">
//                                         {
//                                             cartItems.map((product) => (
//                                                 <li key={product?._id} className="flex py-6">
//                                                     <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                                                         <img
//                                                             alt=""
//                                                             src={`${getImgUrl(product?.coverImage)}`}
//                                                             className="h-full w-full object-cover object-center"
//                                                         />
//                                                     </div>

//                                                     <div className="ml-4 flex flex-1 flex-col">
//                                                         <div>
//                                                             <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
//                                                                 <h3>
//                                                                     <Link to='/'>{product?.title}</Link>
//                                                                 </h3>
//                                                                 <p className="sm:ml-4">${product?.newPrice}</p>
//                                                             </div>
//                                                             <p className="mt-1 text-sm text-gray-500 capitalize"><strong>Category: </strong>{product?.category}</p>
//                                                         </div>
//                                                         <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
//                                                             <p className="text-gray-500"><strong>Qty:</strong> 1</p>

//                                                             <div className="flex">
//                                                                 <button
//                                                                 onClick={() => handleRemoveFromCart(product)}
//                                                                 type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
//                                                                     Remove
//                                                                 </button>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </li>
//                                             ))
//                                         }



//                                     </ul>
//                                 ) : (<p>No product found!</p>)
//                             }


//                         </div>
//                     </div>
//                 </div>

//                 <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//                     <div className="flex justify-between text-base font-medium text-gray-900">
//                         <p>Subtotal</p>
//                         <p>${totalPrice ? totalPrice : 0}</p>
//                     </div>
//                     <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
//                     <div className="mt-6">
//                         <Link
//                             to="/checkout"
//                             className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
//                         >
//                             Checkout
//                         </Link>
//                     </div>
//                     <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
//                         <Link to="/">
//                             or
//                             <button
//                                 type="button"

//                                 className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
//                             >
//                                 Continue Shopping
//                                 <span aria-hidden="true"> &rarr;</span>
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default CartPage


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getImgUrl } from '../../utils/getImgUrl';
import { clearCart, removeFromCart } from '../../redux/features/cart/cartSlice';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="bg-[#FFF8E1] text-[#9B1C1C] min-h-screen p-12">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold mb-6">My Cart</h2>
                    {cartItems.length > 0 ? (
                        <ul className="divide-y divide-gray-300">
                            {cartItems.map((product) => (
                                <li key={product?._id} className="flex items-center justify-between py-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt=""
                                            src={getImgUrl(product?.coverImage)}
                                            className="w-24 h-24 object-cover rounded-md border border-gray-300"
                                        />
                                        <div>
                                            <h3 className="text-lg font-medium">{product?.title}</h3>
                                            <p className="text-sm text-gray-500">Binding: Paperback</p>
                                            <p className="text-sm font-medium mt-1">${product?.newPrice}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button className="border px-2 py-1">-</button>
                                        <span className="px-3 py-1 border">1</span>
                                        <button className="border px-2 py-1">+</button>
                                        <button
                                            onClick={() => handleRemoveFromCart(product)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            &#x1F5D1;
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (<p className="text-lg text-gray-500">Your cart is empty.</p>)}
                </div>
                {/* Order Summary */}
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                    <div className="mb-4">
                        <div className="flex justify-between text-lg">
                            <p>Subtotal</p>
                            <p>${totalPrice || 0}</p>
                        </div>
                        <div className="flex justify-between text-lg">
                            <p>Delivery</p>
                            <p>FREE</p>
                        </div>
                        <div className="text-sm text-[#9B1C1C] underline cursor-pointer">Texas, United States</div>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between text-xl font-bold">
                        <p>Total</p>
                        <p>${totalPrice || 0}</p>
                    </div>
                    <button className="w-full mt-6 bg-[#9B1C1C] text-white font-bold py-2 px-4 rounded-md hover:bg-[#B85C38]">
                        Checkout
                    </button>
                    <p className="text-center text-sm text-red-500 mt-2">🔒 Secure Checkout</p>
                </div>
            </div>
        </div>
    );
};

export default CartPage;