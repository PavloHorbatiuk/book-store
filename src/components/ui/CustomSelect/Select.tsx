import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ReactComponent as DropDownIcon } from "./../../../assets/icons/dropdown.svg";
import { ReactComponent as UpDownIcon } from "./../../../assets/icons/upIcon.svg";

const sort = [{ sort: "popularity" }, { sort: "Name" }, { sort: "newest" }];

const Select = () => {
    const [selected, setSelected] = useState(sort[0]);

    return (
        <div className=' w-[132px] border  border-white border-opacity-30 rounded-md'>
            <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                    <div className='relative mt-1'>
                        <Listbox.Button className='relative w-full cursor-default rounded-lg bg-none py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                            <span className='block truncate'>
                                {selected.sort}
                            </span>
                            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                                {open ? <UpDownIcon /> : <DropDownIcon />}
                            </span>
                        </Listbox.Button>

                        <Transition
                            as={Fragment}
                            leave='transition ease-in duration-100'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-darkGrey py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
                                {sort.map((item, personIdx) => (
                                    <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-3 pr-4 ${
                                                active
                                                    ? "bg-amber-100 text-amber-900"
                                                    : "text-gray-900"
                                            }`
                                        }
                                        value={item}
                                    >
                                        {({ selected }) => (
                                            <span
                                                className={`block truncate ${
                                                    selected
                                                        ? "font-medium text-opacity-50"
                                                        : "font-normal "
                                                }`}
                                            >
                                                {item.sort}
                                            </span>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                )}
            </Listbox>
        </div>
    );
};

export default Select;
