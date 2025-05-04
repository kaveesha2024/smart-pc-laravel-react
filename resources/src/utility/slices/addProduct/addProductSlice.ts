import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    status: number;
    message: string;
}
const initialState: IInitialState = {
    status: 0,
    message: "",
}
const addProductSlice = createSlice({
    name: "addProductSlice",
    initialState,
    reducers: {},
    extraReducers: () => {}
});
export default addProductSlice.reducer;
