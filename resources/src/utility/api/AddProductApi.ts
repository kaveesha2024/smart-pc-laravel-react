import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const AddProductApi = createAsyncThunk(
    'product/addProduct',
    async ( data, thunkAPI ) => {
        const token = thunkAPI.getState().authentication.token;
        try {
            if (!token) {
                toast.error('You need to be logged in to add a product');
                return;
            }
            const apiToast = toast.loading('Loading...');
            const response = await axios.post('/api/products/add-product', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.dismiss(apiToast);
            return response.data;
        }catch (err) {
            console.log(err);
        }
    }
);
export default AddProductApi;
