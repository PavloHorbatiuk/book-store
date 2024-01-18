import React, { useCallback, useEffect, useState } from "react";
import {
    BookType,
    generateMockBooks,
} from "../../mockData/mockDataGenerator.ts";
import InfiniteScroll from "react-infinite-scroll-component";
import BookOptions from "./BookOptions";
import BookItem from "./BookItem";
import Loader from "../ui/Loader/Loader";
import "./BookStyle.css";

const BooksList = () => {
    const [books, setBooks] = useState<BookType[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);

    const fetchMoreBooks = useCallback(() => {
        const additionalBooks = generateMockBooks().slice(10);
        setBooks((prevBooks) => [...prevBooks, ...additionalBooks]);
        setPageNumber((prevPageNumber) => prevPageNumber + 1);

        if (pageNumber >= 5) {
            setHasMore(false);
        }
    }, [pageNumber]);

    useEffect(() => {
        const initialBooks = generateMockBooks().slice(0, 10);
        setBooks(initialBooks);
    }, []);

    const sort = useCallback(
        (value: string) => {
            const sortBy: Record<string, (a: BookType, b: BookType) => number> =
                {
                    Name: (a, b) => a.name.localeCompare(b.name),
                    Popularity: (a, b) => +b.rating - +a.rating,
                    Newest: (a, b) => b.id - a.id,
                };

            if (value in sortBy) {
                const sortedBooks = [...books].sort(sortBy[value]);
                setBooks(sortedBooks);
            }
        },
        [books]
    );

    return (
        <div className='p-6'>
            <BookOptions sort={sort} count={books.length} />
            <InfiniteScroll
                dataLength={books.length}
                next={fetchMoreBooks}
                hasMore={hasMore}
                loader={
                    <div className='flex justify-center my-3'>
                        <Loader />
                    </div>
                }
            >
                <div className='book-list'>
                    {books.map((book, index) => (
                        <BookItem data={{ ...book, id: index }} key={index} />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default BooksList;
