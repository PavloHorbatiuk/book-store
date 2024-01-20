import axios from "axios";

export const $api = axios.create({
    baseURL: "https://65a6cfbe74cf4207b4f0de48.mockapi.io/",
    withCredentials: false,
});

export enum URL {
    GET_BOOKS = "books",
}
