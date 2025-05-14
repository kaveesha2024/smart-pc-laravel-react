import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import DashboardApi from "../../api/dashboard/DashboardApi.ts";
import { IInitialStateDashboard } from "../../types/adminPanel/AdminPanel.d.ts";
interface IDashboardPayload {
    status: number;
    total_products: number;
    total_users: number;
    latest_signup_users: [];

}
const initialState: IInitialStateDashboard = {
    isLoading: false,
    status: 0,
    totalUsers: 0,
    totalProducts: 0,
    latestSignupUsers: [],
};
const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(DashboardApi.pending, (state: IInitialStateDashboard) => {
            state.isLoading = true;
        });
        builder.addCase(DashboardApi.fulfilled, (state: IInitialStateDashboard, action: PayloadAction<IDashboardPayload>) => {
            const payload = action.payload;
            state.isLoading = false;
            state.status = payload.status;
            state.totalProducts = payload.total_products;
            state.totalUsers = payload.total_users;
            state.latestSignupUsers = payload.latest_signup_users;
        });
        builder.addCase(DashboardApi.rejected, (state: IInitialStateDashboard) => {
            state.isLoading = false;
        });
    }
});
export default dashboardSlice.reducer;
