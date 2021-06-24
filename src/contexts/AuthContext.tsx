import {createContext, ReactNode, useState, useEffect} from 'react'

import {auth, firebase} from '../services/firebase'

type User = {
    id: string;
    name: string;
    avatar: string;
}
  
type AuthContextType = {
    user: User | undefined;
    singInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

  
export const authContext = createContext({}as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps){

    const [user, setUser] = useState<User>()

    useEffect(()=> {
      const unsubscribe =auth.onAuthStateChanged(user =>{
        if(user){
          if(user){
            const {displayName, photoURL, uid} = user
      
            if(!displayName || !photoURL){
              throw new Error('Missing information from google Account')
            }
            setUser({id: uid, name: displayName, avatar: photoURL}) 
          }
        }
      })
      return () =>{
        unsubscribe();
      }
    },[])
  
    async function singInWithGoogle(){
      
      const provider = new firebase.auth.GoogleAuthProvider();
  
      const result = await auth.signInWithPopup(provider)
      
      
      if(result.user){
        const {displayName, photoURL, uid} = result.user
  
        if(!displayName || !photoURL){
          throw new Error('Missing information from google Account')
        }
        setUser({id: uid, name: displayName, avatar: photoURL}) 
      }
      
    }

    return(
        <authContext.Provider value={{user, singInWithGoogle}}>
            {props.children}
        </authContext.Provider>
    )
}