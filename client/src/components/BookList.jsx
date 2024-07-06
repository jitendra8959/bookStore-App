import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const BookList = ({ results, resultsCount }) => {

    const { cart, dispatch } = useCart();
    const [addedBooks, setAddedBooks] = useState({});

    const addToCart = (book) => {
        dispatch({ type: 'ADD_TO_CART', payload: book });
        // setAddedBooks((prevState) => ({
        //     ...prevState,
        //     [book._id]: true,
        // }));
    };

    useEffect(() => {
        cart.forEach(c => {
            setAddedBooks((prevState) => ({
                ...prevState,
                [c._id]: true,
            }));
        })
    }, [cart])
    

    return (
        <div className="book-list-container">
            <div className="book-list-header">
                <h1>Books</h1>
                <Link to="/admin/create-book">
                    <button className="create-book-button">Create New Book</button>
                </Link>
            </div>
            <div className="book-list">
                {resultsCount > 0 ? results.map((book) => (
                    <div key={book._id} className="book-item">
                        <Link to={`/book/${book._id}`}>
                            <img src={book.coverImage} alt={book.title} />
                        </Link>
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        <p>${book.price}</p>
                        <button onClick={() => addToCart(book)} disabled={addedBooks[book._id]}>{addedBooks[book._id] ? "Added to Cart" : "Add to Cart"}</button>
                    </div>
                )) : <div>Books not found</div>}
            </div>
        </div>
        // <div>
        //     {
        //         resultsCount > 0 ? results.map((book) => (
        //             <div key={book._id}>
        //                 <Link to={`/book/${book._id}`}>
        //                     <h2>{book.title}</h2>
        //                 </Link>
        //                 <p>{book.author}</p>
        //             </div>
        //         )) : <div>Books not found</div>
        //     }
        // </div>
    );
};

export default BookList;
