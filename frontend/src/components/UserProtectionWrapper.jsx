import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { getMyProfile } from "../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../stores/authSlice";

function UserProtectionWrapper({ children }) {
    const dispatch = useDispatch()
    const {loading, userInfo, success} = useSelector(state => state.auth)

    async function getUser() {
        try {
            const res = await getMyProfile()
            if (res.status === 200) {
                dispatch(login(res.data));
            }else{
                console.log("Failed to get user data :",error)
            }
        } catch (error) {
            console.log("Failed to fetch the user :", error);
        }
    }
    useEffect(() => {
        getUser();
    }, []);


    if(!success){
        return <>
            <h2>Unauthorized Access</h2>
        </>
    }


    return <div>{children}</div>;
}

export default UserProtectionWrapper;
