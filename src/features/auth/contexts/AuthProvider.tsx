import { defaultAuthContext } from "../constants/auth.constants";
import AuthContext from "./AuthContext";

type AuthProviderProps = {
    children: React.ReactNode
}
export default function AuthProvider({children}: AuthProviderProps) {
    return <AuthContext.Provider value={defaultAuthContext}>
        {children}
    </AuthContext.Provider>
}