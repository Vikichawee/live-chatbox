import React from "react"
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { Button } from "@mui/material"
import { auth } from "../Firebase";


export default function SignIn(){

    function signInGoogle(){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    return(
        <>
        <Button  variant="contained" onClick={signInGoogle}>Sign In</Button>
        </>
    )

}