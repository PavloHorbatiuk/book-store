import { BookType } from "../../mockData/mockDataGenerator.ts";
import { ReactComponent as BookImg } from "./../../assets/icons/bookImg.svg";
import { motion } from "framer-motion";

interface IProps {
    book: BookType;
}

const BookItem = (props: IProps) => {
    const { author, name, rating } = props.book;
    return (
        <motion.div
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
            className='flex flex-col'
        >
            <BookImg className=' max-h-[240px] max-w-[190px] w-full h-full rounded-[12px]' />
            <div className='pt-1'>
                <p>{author}</p>
                <p>{name}</p>
                <p>{rating}/5</p>
            </div>
        </motion.div>
    );
};
export default BookItem;
