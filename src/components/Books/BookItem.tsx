import { Link } from "react-router-dom";
// import { ReactComponent as BookImg } from "./../../assets/icons/bookImg.svg";
import { motion } from "framer-motion";
import { ReactComponent as WatchIcon } from "./../../assets/icons/notYetIcon.svg";
import { ReactComponent as WatchedIcon } from "./../../assets/icons/readyIcon.svg";
import LazyLoadImage from "./LazyLoadImage";
import { BookType } from "../../store/slices/book/type";

interface IProps {
    data: BookType;
    index: number;
    isWatch: (index: number) => void;
    scrollPosition: number;
}

const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};
const BookItem = ({ data, isWatch, index, scrollPosition }: IProps) => {
    const { author, name, rating, id, cover, isWatched } = data;
    return (
        <motion.div
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
            className='flex flex-col max-h-[327px] max-w-[190px]'
            variants={cardVariants}
        >
            <div className=' relative'>
                {isWatched ? (
                    <WatchedIcon className='absolute top-0 right-1' />
                ) : (
                    <WatchIcon className='absolute top-0 right-1' />
                )}{" "}
                <WatchIcon className='absolute top-0 right-1' />
                <Link
                    onClick={() => isWatch(index)}
                    to={`/book/${id}`}
                    state={{ book: data, scrollPosition: scrollPosition }}
                >
                    {/* <BookImg className=' w-full h-full rounded-[12px]' /> */}
                    <LazyLoadImage
                        className='h-full w-full max-w-[190px] max-h-[240px] rounded-[12px]'
                        image={cover}
                    />
                </Link>
            </div>
            <div className='pt-1 text-left mt-2'>
                <p>{author}</p>
                <p className='break-words py-1'>{name}</p>
                <p>{rating}/5</p>
            </div>
        </motion.div>
    );
};
export default BookItem;
