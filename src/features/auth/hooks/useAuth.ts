import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function useAuth() {
    const authContext = useContext(AuthContext);
    if(!authContext) {
        throw new Error('useAuth must be used with in AuthProvider');
    }
    return authContext;
}