import Image from "next/image";
import HeroImage from "./heroImage/HeroImage";
import HeroTop from "./heroTop/HeroTop";
import styles from "./HeroSect.module.css"
import BG from "@/public/photos/bg.jpg"

const HeroSect = () => {
    return (
        <section className={styles.whole}>
            <div className={styles.img}>
                <Image fill src={BG} alt="bachground pic" />
            </div>
            <div className={styles.sect}>
                <HeroTop />
                <HeroImage path={"/photos/myPhoto.jpg"} />
            </div>
        </section >
    );
}

export default HeroSect;