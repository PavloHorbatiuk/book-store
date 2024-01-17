import React, { memo, useCallback, useState } from "react";
import Select from "../ui/CustomSelect/Select";
import { ReactComponent as SortBy } from "./../../assets/icons/sorticon.svg";

interface IProps {
    count: number;
    sort: (value: string) => void;
}
const sortData = [{ name: "Popularity" }, { name: "Name" }, { name: "Newest" }];

const BookOptions = memo(function BookOptions({ count, sort }: IProps) {
    const [selected, setSelected] = useState(sortData[0]);

    const handleSelectChange = useCallback((value: { name: string }) => {
        setSelected(value);
    }, []);
    const sortValue = useCallback(
        () => sort(selected.name),
        [selected.name, sort]
    );

    return (
        <div className=' flex items-center justify-between scroll-smooth'>
            <h3>{count} Books</h3>
            <div className='flex items-center'>
                <span onClick={sortValue} className='flex w-[100px]'>
                    <SortBy className='cursor-pointer pr-1' />
                    <span>Sort By</span>
                </span>

                <Select
                    selected={selected}
                    onChange={handleSelectChange}
                    data={sortData}
                />
            </div>
        </div>
    );
});

export default BookOptions;
