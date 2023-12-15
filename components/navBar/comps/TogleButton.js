import styles from "./togleButton.module.css"
import { BiArrowBack } from "react-icons/bi"
import { RiMenuUnfoldLine } from "react-icons/ri"

const TogleButton = () => {

    let hidChatBox = () => { document.querySelector("#CB").setAttribute("data-show", 'false') }

    const tog = () => {
        let temp = document.querySelector("#Hlink");
        const value = temp.getAttribute("data-visi");
        if (value == "false") {
            hidChatBox();
            document.getElementById("Layer_1").style.transform = "translateX(-44px)";
            document.getElementById("Layer_2").style.transform = "translateX(0px)  translateY(-36px)rotateY(180deg)";
            temp.setAttribute("data-visi", 'true');
        }
        else if (value == "true") {
            document.getElementById("Layer_2").style.transform = "translateX(44px) translateY(-36px) rotateY(180deg)";
            document.getElementById("Layer_1").style.transform = "translateX(0px)";
            temp.setAttribute("data-visi", 'false');
        }
    }
    return (
        <button onClick={() => tog()} aria-expanded="false" className={styles.nav_but} >
            <RiMenuUnfoldLine id={"Layer_1"} className={styles.threebar} />
            <BiArrowBack id={"Layer_2"} className={styles.backarro} />
        </button >
    );
}

export default TogleButton;
