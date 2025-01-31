// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { FiShoppingCart } from "react-icons/fi"
// import { getImgUrl } from '../../utils/getImgUrl';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/features/cart/cartSlice';
// import { useFetchBookByIdQuery } from '../../redux/features/books/bookApi';

// const SingleBook = () => {
//     const {id} = useParams();
//     const {data: book, isLoading, isError} = useFetchBookByIdQuery(id);

//     const dispatch = useDispatch();

//  const handleAddToCart = (product) => {
//     dispatch(addToCart(product))
//   }



//     if (isLoading) return <div>Loading...</div>
//     if(isError) return <div>Error happening to load book info</div>
//   return (
//     <div className="max-w-lg shadow-md p-5">
//       <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

//       <div className="">
//         <div>
//           <img
//             src={`${getImgUrl(book.coverImage)}`}
//             alt={book.title}
//             className="mb-8"
//           />
//         </div>

//         <div className="mb-5">
//           <p className="text-gray-700 mb-2">
//             <strong>Author:</strong> {book.author || 'admin'}
//           </p>
//           <p className="text-gray-700 mb-4">
//             <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
//           </p>
//           <p className="text-gray-700 mb-4 capitalize">
//             <strong>Category:</strong> {book?.category}
//           </p>
//           <p className="text-gray-700">
//             <strong>Description:</strong> {book.description}
//           </p>
//         </div>

//         <button
//           onClick={() => handleAddToCart(book)}
//           className="btn-primary px-6 space-x-1 flex items-center gap-1 "
//         >
//           <FiShoppingCart className="" />
//           <span>Add to Cart</span>

//         </button>
//       </div>
//     </div>
//   )
// }

// export default SingleBook
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchBookByIdQuery } from '../../redux/features/books/bookApi';
import { FaWhatsapp, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

const SingleBook = () => {
    const { id } = useParams();
    const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        if (product) {
            dispatch(addToCart(product));
        }
    };

    if (isLoading) return <div className="text-center text-lg font-semibold">Loading...</div>;
    if (isError || !book) return <div className="text-center text-lg text-red-500">Error loading book information</div>;

    return (
        <div className="bg-[#FFF8E1] text-[#9B1C1C] min-h-screen p-12 flex justify-center">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Book Image */}
                <div className="bg-white p-6 shadow-md rounded-lg flex justify-center">
                    <img
                        src={getImgUrl(book.coverImage)}
                        alt={book.title}
                        className="max-w-sm w-full object-cover rounded-md"
                    />
                </div>
                {/* Book Details */}
                <div className="bg-white p-6 shadow-md rounded-lg w-full">
                    <div className="text-sm mb-4 flex justify-between items-center">
                        <Link to="/" className="text-[#9B1C1C] hover:underline">Home</Link>
                        <div className="flex gap-4 text-[#9B1C1C]">
                            <Link to="#" className="flex items-center gap-1 hover:underline">&larr; Prev</Link>
                            <Link to="#" className="flex items-center gap-1 hover:underline">Next &rarr;</Link>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
                    <p className="text-lg font-semibold mb-2">${book.price}</p>
                    <label className="text-sm font-semibold mb-1">Quantity</label>
                    <input type="number" min="1" defaultValue="1" className="border w-16 p-2 mb-6 rounded-md" />
                    <button
                        onClick={() => handleAddToCart(book)}
                        className="bg-[#9B1C1C] text-white font-bold py-3 px-6 rounded-md hover:bg-[#B85C38] flex items-center justify-center gap-2 transition-all duration-200 w-full"
                    >
                        <FiShoppingCart /> Add to Cart
                    </button>
                    <div className="flex gap-4 mt-4 justify-center">
                        <FaWhatsapp className="text-[#25D366] size-6 cursor-pointer" />
                        <FaFacebook className="text-[#1877F2] size-6 cursor-pointer" />
                        <FaTwitter className="text-[#1DA1F2] size-6 cursor-pointer" />
                        <FaPinterest className="text-[#BD081C] size-6 cursor-pointer" />
                    </div>
                    <p className="mt-6 text-sm text-gray-500 italic text-center">A comprehensive guide to cooking techniques and recipes.</p>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;