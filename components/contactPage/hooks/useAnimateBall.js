import { useSpring, useScroll, useTransform } from "framer-motion"


const useAnimateBall = (carouselRef, from_to_array) => {
    const { scrollYProgress } = useScroll({
        layoutEffect: false,
        container: carouselRef
    });
    const SpringY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const PositionY = useTransform(SpringY,
        // Map x from these values:
        [0, 1],
        // Into these values:
        from_to_array
    )
    return PositionY
}

export default useAnimateBall;
