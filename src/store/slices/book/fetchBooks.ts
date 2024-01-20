import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "../../types/stateSchema";
import { URL } from "../../../api/api";
import { BookType } from "./type";

export const fetchBooks = createAsyncThunk<
    BookType[],
    void,
    ThunkConfig<string>
>("book/getAll", async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<BookType[]>(URL.GET_BOOKS, {
            params: {
                page: 1,
                limit: 10,
            },
        });
        if (!response.data) {
            throw new Error("Wrong with fetch books");
        }
        console.log(response.data, "data response");
        return response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error.response.data?.message);
    }
});
