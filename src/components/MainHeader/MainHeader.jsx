/**@jsxImportSource @emotion/react */

import React from 'react';
import * as s from './style';
import { Link } from 'react-router-dom';
import { LuUserPlus , LuLogIn, LuLayoutList, LuNotebookPen } from "react-icons/lu";
//react icons에서 퍼온 이미지들


//a태크는 페이지를 새로 랜더링, Link는 상태를 유지하여 이동 (Link는 a태그로 호출된다)
function MainHeader(props) {
    return (
        <div css={s.layout}>
            <div css={s.leftContainer}>
                <Link to={"/"}><h1>미니 게시판 프로젝트</h1></Link>
                <ul>
                    <Link to={"/list"}>
                        <li><LuLayoutList />게시글 목록</li>
                    </Link>
                    <Link to={"/write"}>
                        <li><LuNotebookPen />게시글 작성</li>
                    </Link>
                </ul>
            </div>
            <div css={s.rightContainer}>
                <ul>
                    <Link to={"/signin"}>
                        <li><LuLogIn />로그인</li>
                    </Link> 
                    <Link to={"/signup"}>
                        <li><LuUserPlus  />회원가입</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default MainHeader;