import React from 'react'
import { useFetchAllBooksQuery } from '../../../redux/features/books/bookApi';
import { useNavigate } from 'react-router-dom';

const ManageBooks = () => {
    // const navigate = useNavigate();

    // const {data: books, refetch} = useFetchAllBooksQuery()

    // const [deleteBook] = useDeleteBookMutation()

    // // Handle deleting a book
    // const handleDeleteBook = async (id) => {
    //     try {
    //         await deleteBook(id).unwrap();
    //         alert('Book deleted successfully!');
    //         refetch();

    //     } catch (error) {
    //         console.error('Failed to delete book:', error.message);
    //         alert('Failed to delete book. Please try again.');
    //     }
    // };

    // // Handle navigating to Edit Book page
    // const handleEditClick = (id) => {
    //     navigate(`dashboard/edit-book/${id}`);
    // };
  return (
    <div>ManageBooks</div>
  )
}

export default ManageBooks