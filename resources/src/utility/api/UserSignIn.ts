import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userSignInApi = createAsyncThunk(
    'users/user-signin',
    async (inputData) => {
        try {
            await axios.get('/sanctum/csrf-cookie');
            const response = await axios.post('/api/users/user-signin', inputData);
            console.log(response);
        }
        catch (error)
        {
            console.log(error);
        }
    }
);
export  default userSignInApi;
