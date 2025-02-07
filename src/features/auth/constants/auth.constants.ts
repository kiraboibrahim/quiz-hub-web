import { AnonymousUser, Role } from "../types/auth.types";
export const anonymousUser: AnonymousUser = {isAuthenticated: false, role: Role.NONE}
export const defaultAuthContext = {
    user: anonymousUser,
    login: async () => {},
    logout: async () => {},
};
