"use client";
import ReactMarkdown from "react-markdown";
import MarkDownStyles from "@/styles/projectPage/Markdown.module.css";
import styles from "@/styles/projectPage/Project.module.css";

export function ProMarkDown({ Markdown = "" }) {
  return (
    <div className={styles.proPara}>
      <ReactMarkdown className={MarkDownStyles.markdown} children={Markdown} />
    </div>
  );
}
