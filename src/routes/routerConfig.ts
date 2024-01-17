import React from "react";
import { LazyRouteFunction, RouteObject } from "react-router";

export enum AppRoutes {
    MAIN = "main",
    BOOK = "book",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.BOOK]: "book/:id",
    // [AppRoutes.NOT_FOUND]: "*",
};

export interface RouteSchema {
    path?: string;
    element?: React.ReactNode;
    index?: boolean;
    lazy?: LazyRouteFunction<RouteObject>;
}

const routeConfig: Record<AppRoutes, RouteSchema> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        index: true,
        async lazy() {
            const { MainPage } = await import("../pages/MainPage");
            return { Component: MainPage };
        },
    },
    [AppRoutes.BOOK]: {
        path: RoutePath.book,
        async lazy() {
            const { BookPage } = await import("../pages/BookPage");
            return { Component: BookPage };
        },
    },
};

const routeConfigArray: RouteSchema[] = Object.values(routeConfig);

export { routeConfig, routeConfigArray };
