"use client"

import styles from "./ChatBox.module.css"
import ChatMessBox from "./comps/Message";
import { PiRobotThin, PiBackspaceThin } from "react-icons/pi";

export default function ChatComponent({ }) {

    const togle = () => {
        let temp = document.querySelector("#CB");
        const value = temp.getAttribute("data-show");
        if (value == "false") {
            temp.setAttribute("data-show", 'true');
        }
        else {
            temp.setAttribute("data-show", 'false');
        }
    }
    return (
        <div id="CB" data-show="false" className={styles.chat}>
            <div className={styles.chatBox}>
                <div className={styles.chatHead}>
                    <h3>Proton</h3>
                    <div>
                        <button className={styles.toggleBut} onClick={togle}>
                            <span>
                                <PiRobotThin className={styles.bot} />
                                <PiBackspaceThin className={styles.cross} />
                            </span>
                        </button>
                    </div>
                </div>
                <ChatMessBox />
            </div>
        </div >
    );
}
