import { motion } from "framer-motion";
import { ReactComponent as LoaderIcon } from "./../../../assets/icons/loader.svg";
const Loader = () => {
    const rotateAnimation = {
        rotate: [0, 360], // Start from 0 degrees and end at 360 degrees
        transition: {
            duration: 2, // Set the duration of the animation
            repeat: Infinity, // Repeat the animation infinitely
            ease: "linear", // Use a linear easing function
        },
    };
    return (
        <motion.div animate={rotateAnimation}>
            <LoaderIcon />
        </motion.div>
    );
};

export default Loader;
