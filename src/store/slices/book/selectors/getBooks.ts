import { StateSchema } from "../../../types/stateSchema";

export const getBooks = (state: StateSchema) => state.book.books;
