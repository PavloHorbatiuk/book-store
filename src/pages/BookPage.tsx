import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { ReactComponent as ArrowBackIcon } from "./../assets/icons/arrowback.svg";
import { RoutePath } from "../routes/routerConfig";

export const BookPage = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const { book } = state;
    return (
        <div className='h-screen'>
            <Header>
                <Link to={RoutePath.main}>
                    <ArrowBackIcon />
                </Link>
            </Header>
            name: <p>{book.name}</p>
            <div>BookDetailsPage for Book ID: {id}</div>
        </div>
    );
};
