import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { ReactComponent as ArrowBackIcon } from "./../assets/icons/arrowback.svg";
import { RoutePath } from "../routes/routerConfig";
import { BookType } from "../store/slices/book/type";
import LazyLoadImage from "../components/Books/LazyLoadImage";

export const BookPage = () => {
    const { state } = useLocation();
    const {
        name,
        cover,
        description,
        author,
        rating,
        readerReviews,
        downloads,
    }: BookType = state.book;

    return (
        <div className='h-screen'>
            <Header>
                <Link to={RoutePath.main}>
                    <ArrowBackIcon />
                </Link>
            </Header>
            <div className='grid grid-flow-row sm:grid-flow-col justify-start p-6'>
                <div className='flex flex-col h-full  max-w-[284px]'>
                    <LazyLoadImage
                        className=' max-h-[358px] w-full h-full rounded-[12px] object-cover'
                        image={cover}
                    />
                    <h4 className='pt-3'>Downloads: {downloads}</h4>
                </div>
                <div className='flex flex-col pl-6 space-y-10'>
                    <h4>Title: {name}</h4>
                    <h4>Author: {author}</h4>
                    <h4>Rating: {rating}/5</h4>
                    <div className='inline-flex'>
                        <h4>Description:</h4>
                        <p className='pl-5'>{description}</p>
                    </div>
                    <div className='inline-flex'>
                        <h4>Reader reviews:</h4>
                        <div className='space-y-2'>
                            {readerReviews.map((comment, index) => (
                                <div className=' pl-5' key={index}>
                                    <p>{comment.comment}</p>
                                    <p>{comment.username}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
