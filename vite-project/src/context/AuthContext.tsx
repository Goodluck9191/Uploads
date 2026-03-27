import  { createContext, useContext, type ReactNode } from "react";
import { useAuthLogic } from "../hooks/useAuth";

type AuthContextType = ReturnType<typeof useAuthLogic>;

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const auth = useAuthLogic()
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) throw new Error('useAuth must be inside of provider')

    return context
}

export default AuthProvider;
