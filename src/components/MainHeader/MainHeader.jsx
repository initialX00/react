/**@jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import * as s from './style';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { LuUserRoundPlus , LuLogIn, LuLogOut, LuUser,LuLayoutList, LuNotebookPen } from "react-icons/lu";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { authUserIdAtomState } from '../../atoms/authAtom';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { accessTokenAtomState } from '../../atoms/authAtom';
//react icons에서 퍼온 이미지들


//a태크는 페이지를 새로 랜더링, Link는 상태를 유지하여 이동 (Link는 a태그로 호출된다)
function MainHeader(props) {
    const naviagte = useNavigate();
    const queryClient = useQueryClient();
    const userId = queryClient.getQueryData(["authenticatedUserQuery"])?.data.body;
    const [ accessToken, setAccessToken ] = useRecoilState(accessTokenAtomState);

    console.log(queryClient.getQueryCache());

    const getUserApi = async () => {
        return await axios.get("http://localhost:8080/servlet_study_war/api/user", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("AccessToken"),
            },
            params: {
                "userId": userId,
            }
        });
    }

    const getUserQuery = useQuery(
        ["getUserQuery"],
        getUserApi,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: !!userId, //useQuery가 비동기이기에 동기적으로 실행을 위해서 
        }
    );

    const handleLogoutOnClick = () => {
        localStorage.removeItem("AccessToken");
        console.log(localStorage.getItem("AccessToken"));
        setAccessToken(localStorage.getItem("AccessToken"));
        //queryClient.invalidateQueries(["authenticatedUserQuery"]); //캐쉬 삭제
        queryClient.removeQueries(["authenticatedUserQuery"]); //원래는 inval를 써야하는데 오류때문에 리무브로
        Navigate("/signin");

    }
    

    // const [ userId, setUserId ] = useRecoilState(authUserIdAtomSate);
    // const [ loadStatus, setLoadStatus ] = useState("idle"); //idle 대기, loading 로딩중, success 로딩완료
    //랜더링 이후 상태가 업데이트되기때문에 로그인 이후에도 새로고침하면 잠깐동안 로그아웃상태가 된다.
    // const getUserApi = async (userId) => {
    //     try {
    //         const response = await axios.get("http://localhost:8080/servlet_study_war/api/user", {
    //             headers: {
    //                 "Authorization": "Bearer" + localStorage.getItem("AccessToken"),
    //             },
    //             params: {
    //                 "userId": userId,
    //             }
    //         });
    //         console.log(response);
    //     } catch (error) {
            
    //     }
    // }
    // useEffect(() => {
    //     if(!!userId) {
    //         getUserApi(userId);
    //     }
    // }, [userId]);

    return (
        <div css={s.layout}>
            <div css={s.leftContainer}>
                <Link to={"/"} ><h1>미니 게시판 프로젝트</h1></Link>
                <ul>
                    <Link to={"/list"}>
                        <li>
                            <LuLayoutList />게시글 목록
                        </li>
                    </Link>
                    <Link to={"/write"}>
                        <li>
                            <LuNotebookPen />게시글 작성
                        </li>
                    </Link>
                </ul>
            </div>
            <div css={s.rightContainer}>
                {
                    !!userId ?
                    <ul>
                        <Link to={"/mypage"} >
                            <li><LuUser />{getUserQuery.isLoading ? "" : getUserQuery.data.data.body.username}</li>
                        </Link>
                        <a onClick={handleLogoutOnClick} >
                            <li><LuLogOut />로그아웃</li>
                        </a>
                    </ul>
                    :
                    <ul>
                        <Link to={"/signin"} >
                            <li><LuLogIn />로그인</li>
                        </Link>
                        <Link to={"/signup"} >
                            <li><LuUserRoundPlus />회원가입</li>
                        </Link>
                    </ul>
                }
            </div>
        </div>
    )
}

export default MainHeader;