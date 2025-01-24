import { atom } from "recoil";

export const authUserIdAtomState = atom({
    key: "authUserIdAtomSate",
    default: 0,
})

export const accessTokenAtomState = atom({
    key: "accessTokenAtomState",
    default: localStorage.getItem("AccessToken"),
});