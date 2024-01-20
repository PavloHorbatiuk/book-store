export interface BookType {
    id: string;
    createdAt: string | Date;
    name: string;
    author: string;
    rating: number;
    description: string;
    cover: string;
    readerReviews: ReaderReview[];
    isWatched?: boolean;
    downloads?: number;
}
export interface ReaderReview {
    username: string;
    comment: string;
}
export interface BookSchema {
    isLoading: boolean;
    books: BookType[];
    error: undefined | string;
    hasMore: boolean;
    pageNumber: number;
}
