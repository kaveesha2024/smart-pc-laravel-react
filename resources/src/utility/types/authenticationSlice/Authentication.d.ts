export interface IInitialState {
    isAuthenticated: boolean;
    isLoading: boolean;
    token: string;
    firstName: string;
    lastName: string;
    userId: string;
    email: string;
    role: string;
    errorStatus: {
        email: string;
        password: string;
    };
}
export interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
}
export interface UserSignInPayload {
    status: number;
    message?: string;
    token?: string | null;
    user?: User;
    errors?: {
        email?: string[];
        password?: string[];
    };
}
