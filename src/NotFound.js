import React from "react";
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

const NotFound = () => {
    return(
        <>
        <h1 className={styles.layout}>404 Error</h1>
        <h3 className={styles.string}>페이지가 존재하지 않습니다.</h3>
        <Link to="/" children={styles.layout} className={styles.hypercol}>
            메인 페이지로 돌아가기
        </Link>
        </>
    )
}

export default NotFound