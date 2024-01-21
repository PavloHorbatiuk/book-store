import {
    type ReducersMapObject,
    configureStore,
    type ThunkDispatch,
    type Reducer,
    AnyAction,
} from "@reduxjs/toolkit";
import { type StateSchema, type ThunkExtraArg } from "./types/stateSchema";
import { $api } from "../api/api";
import { type NavigateOptions, type To } from "react-router-dom";
import { bookReducer } from "./slices/book/bookSlice";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        book: bookReducer,
    };
    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    };

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce as Reducer<StateSchema>,
        preloadedState: initialState,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager;
    return store;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppThunkDispatch = ThunkDispatch<StateSchema, any, AnyAction>;
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];