import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase-config'

const AuthContext=React.createContext()

/*

console.log(auth.createUserWithEmailAndPassword("sam@gmail","1234"))

*/
export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser,setCurrentUser]=useState()

    function signup(email, password) {

      //see Error CreateUserWithEmailAndPassword  
      console.log(auth)
      console.log("test inside signup")
        return auth.createUserWithEmailAndPassword(email,password)
      
      }

      

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          
        })
    
        return unsubscribe
      }, [])

    const value ={
        currentUser,
        signup
    }

  return (
    <>
        <AuthContext.Provider value={value}>
             {children}
         </AuthContext.Provider>
    </>

  )
}
