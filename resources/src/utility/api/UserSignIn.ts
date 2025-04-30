import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ISignIn } from "../types/userFormtypes/UserForms.ts";

const userSignInApi: AsyncThunk<any, any, any> = createAsyncThunk(
    "users/user-signin",
    async (inputData: ISignIn) => {
        try {
            await axios.get("/sanctum/csrf-cookie");
            const response: AxiosResponse<object> = await axios.post(
                "/api/users/user-signin",
                inputData,
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
);
export default userSignInApi;
