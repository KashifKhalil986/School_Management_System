import { createSlice } from "@reduxjs/toolkit";
import { decodeToken } from "../src/Components/utils/auth";

const token = localStorage.getItem("token");
const decodedUser = token ? decodeToken(token) : null;

const initialState = {
    token: token || null,
    user: decodedUser,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload,
                state.user = decodeToken(action.payload);
            localStorage.setItem("token", action.payload)
        },
        clearToken: (state) => {
            state.token = null,
                state.user = null,
                localStorage.removeItem("token")
        }
    }
})

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;