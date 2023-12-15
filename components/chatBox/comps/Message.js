"use client"
import styles from "./message.module.css"

import { useState, useRef } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import Dialog from "./dialog.js";


const ChatMessBox = () => {

    const length = useRef(null)

    const [message, setmessage] = useState([[" 😴 💤💤 !"]]);
    const [optionList, setOptionList] = useState(["Hello ? . . .",]);
    const resetChat = () => {
        // setOptionList(() => []); setmessage(() => []);
        setOptionList(() => new Array("Wake up !")); setmessage(() => new Array([" 😴 💤💤 !"]));
        length.current = 1;
    }
    const action = (data) => {
        if (data == "Thanks for all the information.") { resetChat() }
        else {
            // message are being added
            setmessage(prevMessage => [...prevMessage, [data, true]])
            length.current = Dialog[data].bot_replies.length
            Dialog[data].bot_replies.forEach((text) => {
                setmessage(prevMessage => [...prevMessage, [text, false]])
            })
            let temp = [...optionList]
            // Operation on optionList
            temp = temp.filter(item => item !== data)
            Dialog[data].option.forEach(command => {
                command.removeThis == true ? (temp = temp.filter(item => item !== data)) : (temp = [...temp, command.message])
            })
            temp.length == 0 && (temp = ["Thanks for all the information."])
            setOptionList(() => [...temp])
        }
    }
    return (
        <div className={styles.message}>
            {/* <button onClick={resetChat} > reset</button> */}
            <div id="messx" className={styles.mes}>
                <AnimatePresence>
                    {message.map((array, i) => <Message key={"hello" + array[0] + i} delay={i} lenght={length.current - message.length} user={array[1]} > {array[0]} </Message>)}
                    {optionList.map((value, i) => <Message key={"OP_Id" + Math.floor(Math.random() * 100) + i} lenght={length.current} isClickable={true} MessAction={action} >{value}</Message>)}
                </AnimatePresence>
            </div>
        </div>
    );
}
function Message({ children, lenght = 100, delay = 100, user = false, isClickable = false, MessAction = () => { } }) {

    let framerM = {
        initial: { opacity: 0, x: user ? "-30%" : "30%" },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.25, delay: user ? 0.075 : isClickable ? (0.45 * lenght) : (delay + lenght) > 0 ? (0.3 * (delay + lenght)) : 0 }
    }
    return (
        <m.div
            key={children + "kmfk_kln"}
            {...framerM}
            data-clickable-element={isClickable}
            className={user ? `${styles.MBox} ${styles.user}` : styles.MBox}
            onClick={() => { MessAction(children) }}>
            {children}
        </m.div >
    );
}
export default ChatMessBox;