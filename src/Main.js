import React, { useState, useEffect } from "react";
import styles from "./Main.module.css"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Prism as SyntaxHighlighter }from "react-syntax-highlighter"
import {nord} from "react-syntax-highlighter/dist/esm/styles/prism"
import mdpath from './Main.md'

const Main = (props) => {
    let [content,setContent]=useState({md:""})

    useEffect(()=> {
        fetch(mdpath)
        .then((res)=>res.text())
        .then((text) => setContent(text))
        }, [])

    return(
        <div>
            <div className={styles.Sprite}>
                <h1 children={styles.Sprite} className={styles.spritetxt}><u>Mapleutil <span className={styles.Alphatxt}>α</span></u> 에 오신걸 환영합니다!</h1>
                <p children={styles.Sprite} className={styles.spritetxt}>Mapleutil은 메이플스토리와 관련된 여러 기능을 만드는 프로젝트입니다.</p>
                <a href="https://github.com/quntnim/mapleutil" children={styles.Sprite} className={styles.spritetxt}>깃허브 페이지로 가기</a>
            
            </div>
            <h1 className={styles.content}>Changelog</h1>
            <div className={styles.content}>
                <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return inline ? (
                    // 강조 (``)
                    <code
                        style={{
                        background:
                            "linear-gradient( to right, var(--sub-highlight-color) 15%, var(--highlight-color) 85%, var(--sub-highlight-color) )",
                        padding: "2px",
                        borderRadius: "3px",
                        }}
                        {...props}
                    >
                        {children}
                    </code>
                    ) : match ? (
                    // 코드 (```)
                    <SyntaxHighlighter
                        style={nord}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                    >
                        {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                    ) : (
                    <SyntaxHighlighter
                        style={nord}
                        language="textile"
                        PreTag="div"
                        {...props}
                    >
                        {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                    );
                },
                // 인용문 (>)
                blockquote({ node, children, ...props }) {
                    return (
                    <div
                        style={{
                        background: "#f0f0f0",
                        padding: "1px 15px",
                        borderRadius: "10px",
                        }}
                        {...props}
                    >
                        {children}
                    </div>
                    );
                },
                img({ node, ...props }) {
                    return (
                    <img
                        style={{ maxWidth: "60vw" }}
                        src={props.src.replace("../../../../public/", "/")}
                        alt="MarkdownRenderer__Image"
                    />
                    );
                },
                em({ node, children, ...props }) {
                    return (
                    <span style={{ "font-style": "italic" }} {...props}>
                        {children}
                    </span>
                    );
                },
                }}
            >
                {content.toString().replace(/\n\s\n\s/gi, "\n\n&nbsp;\n\n")
                    .replace(/\*\*/gi, "@$_%!^")
                    .replace(/@\$_%!\^/gi, "**")
                    .replace(/<\/?u>/gi, "*")}
            </ReactMarkdown>
        </div>
    </div>
  );
}

export default Main