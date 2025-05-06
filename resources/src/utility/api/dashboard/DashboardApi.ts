import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../store.ts";

const DashboardApi =  createAsyncThunk(
    "dashboard/dashboard",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const token: string = state.authentication.token;
        const response = await axios.get('/api/dashboard', { headers: { Authorization: `Bearer ${token}` } });
        return response.data;
    }
);
export default DashboardApi;
