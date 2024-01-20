import { motion } from "framer-motion";
import { useState } from "react";

interface IProps {
    image: string;
    className: string;
}
const LazyLoadImage = ({ image, className }: IProps) => {
    const [imageLoading, setImageLoading] = useState(true);
    const [pulsing, setPulsing] = useState(true);

    const imageLoaded = () => {
        setImageLoading(false);
        setTimeout(() => setPulsing(false), 600);
    };
    return (
        <div className={` ${pulsing ? "pulse" : ""} loadable`}>
            <motion.img
                initial={{ height: "358px", opacity: 0 }}
                style={{ height: imageLoading ? "6rem" : "full" }}
                animate={{
                    height: imageLoading ? "358px" : "full",
                    opacity: imageLoading ? 0 : 1,
                }}
                transition={[
                    { height: { delay: 0, duration: 0.4 } },
                    { opacity: { delay: 0.5, duration: 0.4 } },
                ]}
                className={className}
                onLoad={imageLoaded}
                width='100%'
                src={image}
            />
        </div>
    );
};
export default LazyLoadImage;
