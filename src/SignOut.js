import React from "react"
import { signOut } from "firebase/auth";
import { Button } from "@mui/material"
import { auth } from "./Firebase";


export default function SignOut(){

    function signOutGoogle(){
        
        signOut(auth)
    }

    return(
        <>
        <Button variant="contained" onClick={signOutGoogle}>Sign Out</Button>
        </>
    )

}