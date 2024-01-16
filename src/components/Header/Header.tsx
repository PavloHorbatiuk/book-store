import { ReactNode } from "react";
import "./Header.css";
interface IProps {
    children: ReactNode;
}

export const Header: React.FC<IProps> = ({ children }) => {
    return <div className='header'>{children}</div>;
};
