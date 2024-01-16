import React from "react";
import Select from "../ui/Select";
import { ReactComponent as SortBy } from "./../../assets/icons/sorticon.svg";

const BooksList = () => {
    return (
        <div className='p-6 flex items-center justify-between'>
            <h3>122 Books</h3>
            <div className='flex items-center'>
                <span className='flex w-[100px]'>
                    <SortBy className='cursor-pointer pr-1' />
                    <h3>Sort By</h3>
                </span>
                <Select />
            </div>
        </div>
    );
};

export default BooksList;
