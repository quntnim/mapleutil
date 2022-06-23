import React, {useState} from "react";
import styles from './randomchar.module.css'

const todaybob = ["버튼을 눌러주세요.","치킨", "국밥", "닭갈비", "냉면", "중국집", "막창","라면"]
function Randombob() {
    const [idx,setidx] = useState(0)
    const Button = () => {
        setidx(Math.floor(Math.random() * (8-1)+1))
    }

    return(
        <div className={styles.contents}>
            <h1 className={styles.li}>랜덤 저녁 생성기</h1>
            <h2 className={styles.li}>{todaybob[idx]}</h2>
            <button onClick={Button} className={styles.btn}>밥 줘!</button>
        </div>
    )
}

export default Randombob