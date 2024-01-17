import { motion } from "framer-motion";
import { ReactComponent as LoaderIcon } from "./../../../assets/icons/loader.svg";
const Loader = () => {
    const rotateAnimation = {
        rotate: [0, 360],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
        },
    };
    return (
        <motion.div animate={rotateAnimation}>
            <LoaderIcon />
        </motion.div>
    );
};

export default Loader;
