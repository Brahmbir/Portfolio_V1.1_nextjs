import styles from "./logo.module.css"
import Link from 'next/link'

const Logo = ({ className }) => {
    return (
        <Link href="/" className={` ${styles.logo} ${className}`}
        > Brahm</Link >
    );
}

export default Logo;
