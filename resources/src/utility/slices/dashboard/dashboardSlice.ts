import { createSlice } from "@reduxjs/toolkit";
import DashboardApi from "../../api/dashboard/DashboardApi.ts";
import toast from "react-hot-toast";
interface IInitialState {
    isLoading: boolean,
    status: number,
    totalUsers: number,
    totalProducts: number,
    latestSignupUsers: string[],
}
const initialState: IInitialState = {
    isLoading: false,
    status: 0,
    totalUsers: 0,
    totalProducts: 0,
    latestSignupUsers: [],
};
let toastApi: any;
const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(DashboardApi.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(DashboardApi.fulfilled, (state, action) => {
            const payload = action.payload;
            state.isLoading = false;
            state.status = payload.status;
            state.totalProducts = payload.total_products;
            state.totalUsers = payload.total_users;
            state.latestSignupUsers = payload.latest_signup_users;
        });
        builder.addCase(DashboardApi.rejected, (state) => {
            state.isLoading = false;
        });
    }
});
export default dashboardSlice.reducer;
