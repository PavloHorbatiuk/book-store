import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { ReactComponent as ArrowBackIcon } from "./../assets/icons/arrowback.svg";
import { RoutePath } from "../routes/routerConfig";
import { BookType } from "../mockData/mockDataGenerator.ts";

export const BookPage = () => {
    const { state } = useLocation();
    const { name, description, author, rating }: BookType = state.book;

    console.log(name, description, rating, "book");
    return (
        <div className='h-screen'>
            <Header>
                <Link to={RoutePath.main}>
                    <ArrowBackIcon />
                </Link>
            </Header>
            <div className='flex flex-col'>
                <span>Title: {name}</span>
                <span>Author: {author}</span>
                <span>Rating:: {rating}/5</span>
                <span>Description: {description}/5</span>
            </div>
        </div>
    );
};
