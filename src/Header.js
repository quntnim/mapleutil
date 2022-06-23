import React from "react";
import { Link } from 'react-router-dom'
import styles from './Header.module.css'


function Header(props){
    return(
        <header className={styles.Header}>
            <div className={styles.contents}>
                <Link to="/" className={styles.hypercolor}>
                    <h1 className={styles.Maintxt}>Mapleutil <span children={styles.Maintxt} className={styles.Alphatxt}>α</span></h1>
                </Link>

                <nav className={styles.navigation}>
                    <ul className={styles.ul}>
                        <Link to="/randomchar/" className={styles.hypercolor}>
                            <li className={styles.li}>
                                랜덤 직업 생성기
                            </li>
                        </Link>
                        <Link to="/star4th/" className={styles.hypercolor}>
                            <li className={styles.nota}>
                                스타포스 시뮬레이터
                            </li>
                        </Link>
                        <Link to="/setting/" className={styles.hypercolor}>
                            <li className={styles.nota}>
                                설정
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header