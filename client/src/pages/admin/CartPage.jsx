import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import '../../cartPage.css';

const CartPage = () => {
    const { cart, dispatch } = useCart();

    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    const calculateTotal = () => {
        return cart.reduce((acc, book) => acc + book.price, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            {cart.length > 0 ? (
                <>
                    <div className="cart-items">
                        {cart.map((book) => (
                            <div key={book._id} className="cart-item">
                                <img src={book.coverImage} alt={book.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h2>{book.title}</h2>
                                    <p>{book.author}</p>
                                    <p>${book.price}</p>
                                    <button className="remove-button" onClick={() => removeFromCart(book._id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <p>Total: ${calculateTotal()}</p>
                        <button className="checkout-button">Proceed to Checkout</button>
                    </div>
                </>
            ) : (
                <div className="empty-cart">
                    <p>Your cart is empty</p>
                    <Link to="/admin">
                        <button className="continue-shopping-button">Continue Shopping</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartPage;
