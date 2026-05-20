import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers } from "../services/adminServices";

export const fetchUsers = createAsyncThunk(
    "user/fetchUsers", 
    async () => {
        try {
            const response = await getAllUsers();
            if (response.data.success) {
                return response.data.data;
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default userSlice.reducer;