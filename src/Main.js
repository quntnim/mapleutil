import React from "react";
import { Link } from "react-router-dom";

const Main = (props) => {
    return(
        <>
            <h1>메인 페이지</h1>
            <ul>
                <Link to='/Counter/'>Counter</Link>
            </ul>
        </>
    )
}

export default Main