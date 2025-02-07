import { createContext } from "react";
import { AuthContextType } from "../types/auth.types";
import { defaultAuthContext } from "../constants/auth.constants";

const AuthContext = createContext<AuthContextType>(defaultAuthContext);
export default AuthContext;