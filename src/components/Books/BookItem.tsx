import { BookType } from "../../mockData/mockDataGenerator.ts";
import { ReactComponent as BookImg } from "./../../assets/icons/bookImg.svg";

interface IProps {
    book: BookType;
}

const BookItem = (props: IProps) => {
    const { author, name, rating } = props.book;
    return (
        <div className='flex flex-col '>
            <BookImg className=' max-h-[240px] max-w-[190px] w-full h-full rounded-xl' />
            <p>{author}</p>
            <p>{name}</p>
            <p>{rating}/5</p>
        </div>
    );
};
export default BookItem;
