import React, { useContext, useState } from 'react'


const AuthCOntext=React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider() {
    const [currentUser,setCurrentUser]=useState()

    const value ={
        currentUser
    }

  return (
    <>
        <AuthCOntext.Provider value={value}>
             {childeren}
         </AuthCOntext.Provider>
    </>

  )
}
