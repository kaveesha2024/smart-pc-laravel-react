import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import userSignInApi from "../../api/UserSignIn.ts";
import {
    IInitialState,
    UserSignInPayload,
} from "../../types/authenticationSlice/Authentication.ts";
import toast from "react-hot-toast";
const initialState: IInitialState = {
    isLoading: false,
    isAuthenticated: false,
    token: "",
    firstName: "",
    lastName: "",
    userId: "",
    email: "",
    role: "",
    errorStatus: {
        email: "",
        password: "",
    },
};
const authenticationSlice = createSlice({
    name: "AuthenticationSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userSignInApi.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(
            userSignInApi.fulfilled,
            (state, action: PayloadAction<UserSignInPayload>) => {
                const payload = action.payload;
                if (payload.status === 401) {
                    if (payload.message) {
                        if (payload.message === "Invalid email address") {
                            state.errorStatus.password = "";
                            state.errorStatus.email = payload.message;
                            return;
                        }
                        if (payload.message === "Invalid password") {
                            state.errorStatus.email = "";
                            state.errorStatus.password = payload.message;
                            return;
                        }
                        return;
                    }
                    if (payload.errors) {
                        if (payload.errors.email) {
                            state.errorStatus.email = payload.errors.email[0];
                            return;
                        }
                        if (payload.errors.password) {
                            state.errorStatus.password =
                                payload.errors.password[0];
                            return;
                        }
                    }
                }

                state.errorStatus.email = "";
                state.errorStatus.password = "";
                state.token = payload.token || "";
                state.email = payload.user?.email || "";
                state.role = payload.user?.role || '';
                state.firstName = payload.user?.first_name || "";
                toast.success(`welcome ${state.firstName}`);
                state.lastName = payload.user?.last_name || "";
                state.userId = payload.user?.id || "";
                state.isLoading = false;
                state.isAuthenticated = true;
            },
        );
        builder.addCase(userSignInApi.rejected, (state) => {
            toast.error('error Occurred');
            state.isLoading = false;
        });
    },
});
export default authenticationSlice.reducer;
