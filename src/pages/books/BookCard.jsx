import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { BooksContext, ThemeContext } from '../../context';
import BookDetailsModal from './BookDetailsModal';
import Rating from './Rating';
import { FaHeart } from 'react-icons/fa';

const BookCard = ({ book }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const { state, dispatch } = useContext(BooksContext);
    const { darkMode } = useContext(ThemeContext);

    function handleAddToCart(event, book) {
        event.stopPropagation();

        const found = state.cartData.find((item) => item.id === book.id);

        if (!found) {
            dispatch({
                type: "ADD_TO_CART",
                payload: { ...book },
            });
            toast.success(`Added ${book?.title} to Cart!`, {
                position: "top-right"
            });
        } else {
            toast.error(`The book ${book?.title} has already been added to the cart`, {
                position: "top-right"
            });
        }
    }

    function handleBookSelection(book) {
        setSelectedBook(book);
        setShowModal(true);
    }

    function handleModalClose() {
        setSelectedBook(null);
        setShowModal(false);
    }

    function handleBookmarkToggle(event, book) {
        event.stopPropagation();

        dispatch({
            type: "TOGGLE_BOOKMARK",
            payload: book,
        });
    }

    const isBookmarked = state.bookmarkedBooks.some((b) => b.id === book.id);

    return (
        <>
            {showModal && (
                <BookDetailsModal
                    book={selectedBook}
                    onClose={handleModalClose}
                    onCartAdd={handleAddToCart}
                />
            )}
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a href="#">
                    <div className='relative'>
                        <button
                            className={`absolute top-2 right-30 top-30 p-1 ${isBookmarked ? 'glow' : ''}`}
                            onClick={(e) => handleBookmarkToggle(e, book)}
                        >
                            <FaHeart className={`text-lg ${isBookmarked ? 'text-red-500' : 'text-gray-500'}`} />
                        </button>
                        <img
                            className="h-96 object-cover rounded-lg" // Add 'rounded-lg' for a slight curve
                            src={book?.cover}
                            alt={book?.title}
                            onClick={() => handleBookSelection(book)}
                        />
                    </div>
                    <figcaption className="pt-4" onClick={() => handleBookSelection(book)}>
                        <h3 className="text-xl mb-1">{book?.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{book?.genre}</p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={book?.rating} />
                        </div>
                        <button
                            className={`rounded-lg py-1.5 px-2 flex items-center justify-center gap-1 text-sm font-semibold ${
                                darkMode ? 'bg-white text-black' : 'bg-black text-white'
                            }`}
                            onClick={(e) => handleAddToCart(e, book)}
                        >
                            <img src="./assets/tag.svg" alt="" />
                            <span>${book?.price} | Add to Cart</span>
                        </button>
                    </figcaption>
                </a>
            </figure>
        </>
    );
}

export default BookCard;
