import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "../../types/stateSchema";
import { URL } from "../../../api/api";
import { BookType } from "./type";
// import { bookActions } from "./bookSlice";

interface ThunkProps {
    page: number;
    limit: number;
}

export const getMoreBooks = createAsyncThunk<
    BookType[],
    ThunkProps,
    ThunkConfig<string>
>("book/getMore", async (params, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<BookType[]>(URL.GET_BOOKS, {
            params,
        });
        if (!response.data) {
            throw new Error("Wrong with get book");
        }
        console.log(response.data, "data response");
        return response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error.response.data?.message);
    }
});
