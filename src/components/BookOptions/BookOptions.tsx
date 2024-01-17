import React from "react";
import Select from "../ui/CustomSelect/Select";
import { ReactComponent as SortBy } from "./../../assets/icons/sorticon.svg";

interface IProps {
    count: number;
}

const BookOptions = ({ count }: IProps) => {
    return (
        <div className=' flex items-center justify-between scroll-smooth'>
            <h3>{count} Books</h3>
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

export default BookOptions;
