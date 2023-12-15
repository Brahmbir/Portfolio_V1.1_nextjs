"use client"
import styles from "./attachment.module.css"

import { useState } from "react"

export default function AttachmentInput() {
    const [fileName, setFileName] = useState('')
    return (
        <div className={styles.file_attachment_wrapper}>
            <input
                onChange={(e) => {
                    if (e.target.value) {
                        setFileName(e.target.value.split("\\").pop())
                        e.target.setAttribute("data-enter", "true")
                    }
                    else {
                        setFileName('')
                        e.target.setAttribute("data-enter", "false");
                    }
                }}
                hidden
                data-enter="false"
                type="file"
                name="attachment"
                id={styles["file_input"]}
                accept=".png,.jpg,.pdf,.doc,.docx,.xml,.xls,.xlsx"
            />
            <label htmlFor={styles["file_input"]} className={styles.attach_button}>
                <svg fill="none" viewBox="0 0 56 56" className={styles.attach_paperclip}>
                    <circle cx={28} cy={28} r="27.5" stroke="#C4C4C4" />
                    <path d="M34.833 21.833v12.25a6.413 6.413 0 0 1-6.416 6.417A6.413 6.413 0 0 1 22 34.083V20.667A4.665 4.665 0 0 1 26.667 16a4.665 4.665 0 0 1 4.666 4.667v12.25a2.917 2.917 0 0 1-5.833 0V21.833h1.167v11.084a1.75 1.75 0 1 0 3.5 0v-12.25a3.5 3.5 0 0 0-7 0v13.416a5.25 5.25 0 1 0 10.5 0v-12.25h1.166Z" fill="#fff"></path>
                </svg>
                <svg fill="none" viewBox="0 0 56 56" className={styles.attach_loading}>
                    <circle cx={28} cy={28} r="27.5" fill="#4e4cb8" stroke="#3719CA" />
                    <path
                        d="M39.593 31.768a.63.63 0 0 0-.806.382 11.105 11.105 0 1 1-2.605-11.615c.227.227.441.466.646.712l-5.984.015a.63.63 0 1 0 0 1.26l7.244-.019a.63.63 0 0 0 .63-.63l.018-7.243a.63.63 0 1 0-1.26 0v5.41c-.125-.135-.248-.274-.38-.406a12.352 12.352 0 1 0 2.865 12.94.63.63 0 0 0-.368-.805Z"
                        fill="#fff"
                    ></path>
                </svg>
                <span className={styles.attach_button_text}>
                    Attach a file
                    <span className={styles.attach_button_details}>
                        Available formats: pdf, image, doc file{" "}
                        <span className={styles.size}>( 15 mb maximum )</span>
                    </span>
                </span>
                <span id={styles["attachment_name"]} >{fileName}</span>
                <button
                    onClick={(e) => {
                        document.getElementById(styles["file_input"]).value = "";
                        document.getElementById(styles["file_input"]).setAttribute("data-enter", "false");
                        setFileName("")
                    }}
                    type="button" className={styles.attachment_delete}>
                    <svg fill="none" viewBox="0 0 56 56">
                        <path d="M55.35 28c0 15.105-12.245 27.35-27.35 27.35C12.895 55.35.65 43.105.65 28 .65 12.895 12.895.65 28 .65 43.105.65 55.35 12.895 55.35 28Z" stroke="#000" strokeWidth="1.3" />
                        <path d="M18.81 18.808a1.3 1.3 0 0 1 1.839 0l16.546 16.546a1.3 1.3 0 1 1-1.838 1.839L18.81 20.646a1.3 1.3 0 0 1 0-1.838Z" fill="#32344D" />
                        <path d="M37.195 18.808a1.3 1.3 0 0 0-1.838 0L18.81 35.354a1.3 1.3 0 0 0 1.839 1.839l16.546-16.547a1.3 1.3 0 0 0 0-1.838Z" fill="#32344D" />
                    </svg>
                </button>
            </label>
        </div>

    )
}