import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookSchema, BookType } from "./type";
import { fetchBooks } from "./fetchBooks";
import { getMoreBooks } from "./getMoreBooks";

const initialState: BookSchema = {
    isLoading: false,
    books: [],
    error: undefined,
    hasMore: true,
    pageNumber: 1,
};

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setBook: (state, action: PayloadAction<BookType[]>) => {
            state.books = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error && (state.error = action.payload);
        },
        setHasMore: (state, action: PayloadAction<boolean>) => {
            state.hasMore = action.payload;
        },
        setPageNumber: (state, action: PayloadAction<number>) => {
            state.pageNumber = action.payload;
        },
        setIsWatched: (state, action: PayloadAction<number>) => {
            const index = action.payload;
            state.books[index].isWatched = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            fetchBooks.fulfilled,
            (state, action: PayloadAction<BookType[]>) => {
                const { payload } = action;
                state.books.push(...payload);
            }
        );
        builder.addCase(
            getMoreBooks.fulfilled,
            (state, action: PayloadAction<BookType[]>) => {
                const { payload } = action;
                state.books.push(...payload);
                state.pageNumber++;
                state.hasMore = payload.length !== 0;
            }
        );
    },
});

export const { actions: bookActions } = bookSlice;
export const { reducer: bookReducer } = bookSlice;
