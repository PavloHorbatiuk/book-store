import React, { useCallback, useEffect, useState } from "react";
import {
    BookType,
    generateMockBooks,
} from "../../mockData/mockDataGenerator.ts";
import InfiniteScroll from "react-infinite-scroll-component";
import BookOptions from "../BookOptions/BookOptions";
import BookItem from "./BookItem";
import Loader from "../ui/Loader/Loader";

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

    return (
        <div className='p-6'>
            <BookOptions count={books.length} />
            <InfiniteScroll
                dataLength={books.length}
                next={fetchMoreBooks}
                hasMore={hasMore}
                loader={<Loader />}
            >
                <div className='flex flex-wrap grow shrink self-auto basis-auto gap-4 justify-between items-stretch pt-2'>
                    {books.map((book, index) => (
                        <BookItem book={book} key={index} />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default BooksList;
