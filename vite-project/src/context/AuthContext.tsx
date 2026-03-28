import  { createContext, useContext, } from "react";
import { useAuthLogic } from "../hooks/useAuth";

type AuthContextType = ReturnType<typeof useAuthLogic>;

export const AuthContext = createContext<AuthContextType | null>(null);



export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) throw new Error('useAuth must be inside of provider')

    return context
}


