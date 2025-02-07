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
                {/* Cart Items Section */}
                <div className="lg:col-span-2 bg-white p-6 shadow-md rounded-lg">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">My Cart</h2>
                        {cartItems.length > 0 && (
                            <button
                                onClick={handleClearCart}
                                className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 transition"
                            >
                                Clear Cart
                            </button>
                        )}
                    </div>
                    
                    {cartItems.length > 0 ? (
                        <ul className="divide-y divide-gray-300">
                            {cartItems.map((product) => (
                                <li key={product?._id} className="flex items-center justify-between py-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt={product?.title}
                                            src={getImgUrl(product?.coverImage)}
                                            className="w-24 h-24 object-cover rounded-md border border-gray-300"
                                        />
                                        <div>
                                            <h3 className="text-lg font-medium">{product?.title}</h3>
                                            <p className="text-sm text-gray-500 capitalize"><strong>Category:</strong> {product?.category}</p>
                                            <p className="text-sm font-medium mt-1">${product?.newPrice}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
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
                    ) : (
                        <p className="text-lg text-gray-500 text-center">Your cart is empty.</p>
                    )}
                </div>

                {/* Order Summary Section */}
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
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between text-xl font-bold">
                        <p>Total</p>
                        <p>${totalPrice || 0}</p>
                    </div>
                    <Link
                        to="/checkout"
                        className="w-full mt-6 bg-[#9B1C1C] text-white font-bold py-2 px-4 rounded-md hover:bg-[#B85C38] transition block text-center"
                    >
                        Checkout
                    </Link>
                    <p className="text-center text-sm text-red-500 mt-2">🔒 Secure Checkout</p>
                    <div className="text-center mt-4">
                        <Link to="/" className="text-[#9B1C1C] hover:text-[#B85C38] transition">
                            &larr; Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
