import React, { useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import BookOptions from "./BookOptions";
import BookItem from "./BookItem";
import Loader from "../ui/Loader/Loader";
import "./BookStyle.css";
import { BookType } from "../../store/slices/book/type";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { getMoreBooks } from "../../store/slices/book/getMoreBooks";
import { getHasMore } from "../../store/slices/book/selectors/getHasMore";
import { getPageNumber } from "../../store/slices/book/selectors/getPageNumber";
import { bookActions } from "../../store/slices/book/bookSlice";
import { getBooks } from "../../store/slices/book/selectors/getBooks";

const BooksList = () => {
    const hasMore = useSelector(getHasMore);
    const pageNumber = useSelector(getPageNumber);
    const books = useSelector(getBooks);
    const dispatch = useDispatch<AppThunkDispatch>();

    const fetchMoreBooks = () => {
        const params = {
            page: pageNumber + 1,
            limit: 10,
        };
        dispatch(getMoreBooks(params));
    };

    const sort = useCallback(
        (value: string) => {
            console.log(value, "sorted books");

            const sortBy: Record<string, (a: BookType, b: BookType) => number> =
                {
                    Name: (a, b) => a.name.localeCompare(b.name),
                    Popularity: (a, b) => +b.rating - +a.rating,
                    Newest: (a, b) =>
                        new Date(a.createdAt).valueOf() -
                        new Date(b.createdAt).valueOf(),
                };

            if (value in sortBy) {
                const sortedBooks = [...books].sort(sortBy[value]);
                dispatch(bookActions.setBook(sortedBooks));
            }
        },
        [books, dispatch]
    );

    const setIsWatched = useCallback(
        (index: number) => {
            dispatch(bookActions.setIsWatched(index));
        },
        [dispatch]
    );

    return (
        <div className='p-6'>
            <BookOptions sort={sort} count={books.length} />
            <InfiniteScroll
                dataLength={books.length}
                next={fetchMoreBooks}
                hasMore={hasMore}
                loader={
                    <div className='flex justify-center m-0 p-0 my-3 overflow-hidden'>
                        <Loader />
                    </div>
                }
            >
                <div className='book-list'>
                    {books.map((book, index) => (
                        <BookItem
                            isWatch={setIsWatched}
                            data={book}
                            index={index}
                            key={book.id}
                        />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default BooksList;
