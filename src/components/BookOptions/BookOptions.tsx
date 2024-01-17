import React from "react";
import Select from "../ui/CustomSelect/Select";
import { ReactComponent as SortBy } from "./../../assets/icons/sorticon.svg";

interface IProps {
    count: number;
}
const sortData = [{ name: "Popularity" }, { name: "Name" }, { name: "Newest" }];

const BookOptions = ({ count }: IProps) => {
    const sortValue = (selected: { name: string }) =>
        console.log(selected.name);
    return (
        <div className=' flex items-center justify-between scroll-smooth'>
            <h3>{count} Books</h3>
            <div className='flex items-center'>
                <span className='flex w-[100px]'>
                    <SortBy className='cursor-pointer pr-1' />
                    <span>Sort By</span>
                </span>
                <Select onChange={sortValue} data={sortData} />
            </div>
        </div>
    );
};

export default BookOptions;
