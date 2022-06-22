import React from "react";
import { Link } from 'react-router-dom'
import styles from './Header.module.css'


function Header(props){
    return(
        <header className={styles.Header}>
            <div className={styles.contents}>
                <Link to="/" className={styles.hypercolor}>
                    <h1>goto main</h1>
                </Link>

                <nav className={styles.navigation}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            샌1즈
                        </li>
                        <li className={styles.li}>
                            엄준식
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header