import type { ReactNode } from "react";
import { useAuthLogic } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const auth = useAuthLogic()
	return (<AuthContext.Provider value={auth}>{children}</AuthContext.Provider>);
};