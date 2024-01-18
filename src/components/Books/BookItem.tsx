import { Link } from "react-router-dom";
import { BookType } from "../../mockData/mockDataGenerator.ts";
import { ReactComponent as BookImg } from "./../../assets/icons/bookImg.svg";
import { motion } from "framer-motion";
import { ReactComponent as WatchIcon } from "./../../assets/icons/notYetIcon.svg";

interface IProps {
    data: BookType;
}

const BookItem = ({ data }: IProps) => {
    const { author, name, rating, id } = data;
    return (
        <motion.div
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
            className='flex flex-col'
        >
            <div className='max-h-[240px] max-w-[190px]  relative'>
                <WatchIcon className='absolute top-0 right-1' />
                <Link to={`/book/${id}`} state={{ book: data }}>
                    <BookImg className=' w-full h-full rounded-[12px]' />
                </Link>
            </div>
            <div className='pt-1'>
                <p>{author}</p>
                <p>{name}</p>
                <p>{rating}/5</p>
            </div>
        </motion.div>
    );
};
export default BookItem;
