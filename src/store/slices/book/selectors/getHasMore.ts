import { StateSchema } from "../../../types/stateSchema";

export const getHasMore = (state: StateSchema) => state.book.hasMore;
