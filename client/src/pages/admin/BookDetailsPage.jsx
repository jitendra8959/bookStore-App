import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {commonConfig} from '../../utils/config/config'; // Adjust the path to your commonConfig file

const BookDetailsPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem(commonConfig.ACCESS_TOKEN)}`,
                    },
                };
                const { data } = await axios.get(`/books/${id}`, config); // Pass config as second argument
                setBook(data);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        fetchBook();
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div className="book-details-container">
            <img src={book.coverImage} alt={book.title} className="book-details-image" />
            <div className="book-details-content">
                <h1>{book.title}</h1>
                <h2>by {book.author}</h2>
                <p>{book.description}</p>
                <p className="book-price">${book.price}</p>
            </div>
            <Link to={`/admin`}>Back</Link>
        </div>
    );
};

export default BookDetailsPage;
