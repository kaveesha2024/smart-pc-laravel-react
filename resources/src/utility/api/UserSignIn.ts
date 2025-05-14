import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ISignIn } from "../types/userFormtypes/UserForms.d.ts";
import toast from "react-hot-toast";

const userSignInApi: AsyncThunk<any, any, any> = createAsyncThunk(
    "users/user-signin",
    async (inputData: ISignIn) => {
        try {
            const apiToast = toast.loading('Loading...');
            await axios.get("/sanctum/csrf-cookie");
            const response: AxiosResponse<object> = await axios.post(
                "/api/users/user-signin",
                inputData,
            );
            toast.dismiss(apiToast);
            return response.data;
        } catch (error) {
            toast.error('Check your internet connection');
            console.log();
        }
    },
);
export default userSignInApi;
