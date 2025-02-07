export enum Role {
    INSTRUCTOR = 'INSTRUCTOR',
    STUDENT = 'STUDENT',
    NONE = 'NONE',
}

export type AuthContextType = {
    user: User | AnonymousUser;
    login: () => Promise<void>;
    logout: () => Promise<void>;
};

export interface User {
    id: number;
    role: Role;
    firstName: string;
    lastName: string;
    isAuthenticated: boolean;
}

export interface AnonymousUser {
    isAuthenticated: boolean;
    role: Role;
}
