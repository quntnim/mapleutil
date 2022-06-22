import React, {useState} from "react";
import styles from './RandomChar.module.css'

const mapleclass = ["버튼을 눌러주세요.","히어로", "팔라딘", "다크나이트", "아크메이지 (불,독)", "아크메이지 (썬,콜)", "비숍", "보우마스터", "신궁", "패스파인더", "나이트로드", "섀도어", "듀얼블레이드", "바이퍼", "캡틴", "캐논슈터", "소울마스터", "미하일", "플레임위자드", "윈드브레이커", "나이트워커", "스트라이커", "블래스터", "데몬슬레이어", "데몬어벤져", "배틀메이지", "와일드헌터", "메카닉", "제논", "아란", "에반", "루미너스", "메르세데스", "팬텀", "은월", "카이저", "카인", "카데나", "엔젤릭버스터", "아델", "일리움", "아크", "라라", "호영", "키네시스", "제로"]
function RandomChar() {
    const [idx,setidx] = useState(0)
    const Button = () => {
        setidx(Math.floor(Math.random() * (46-1)+1))
    }

    return(
        <div className={styles.contents}>
            <h1 className={styles.li}>랜덤 직업 생성기</h1>
            <h2 className={styles.li}>{mapleclass[idx]}</h2>
            <button onClick={Button} className={styles.btn}>랜덤 직업 고르기!</button>
        </div>
    )
}

export default RandomChar