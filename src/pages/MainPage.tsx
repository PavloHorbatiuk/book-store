import React from "react";
import { Header } from "../components/Header/Header";
import BooksList from "../components/Books/BooksList";

export const MainPage = () => {
    return (
        <div>
            <Header>
                <h1>Books read this month</h1>
            </Header>
            <BooksList />
        </div>
    );
};
