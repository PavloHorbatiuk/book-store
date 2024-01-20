import { StateSchema } from "../../../types/stateSchema";

export const getPageNumber = (state: StateSchema) => state.book.pageNumber;
