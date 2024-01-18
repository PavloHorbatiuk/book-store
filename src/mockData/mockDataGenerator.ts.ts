export interface ReaderReview {
    username: string;
    comment: string;
}

export interface BookType {
    id: string;
    name: string;
    author: string;
    rating: number;
    description: string;
    cover: string;
    readerReviews: ReaderReview[];
    isWatched?: boolean;
}

function generateRandomBook() {
    const names = [
        "The Great Gatsby",
        "To Kill a Mockingbird",
        "1984",
        "Pride and Prejudice",
        "The Catcher in the Rye",
    ];
    const authors = [
        "F. Scott Fitzgerald",
        "Harper Lee",
        "George Orwell",
        "Jane Austen",
        "J.D. Salinger",
    ];
    const coverBook = [
        "./../assets/cover-book/coverBook2.svg",
        "./../assets/cover-book/coverBook1.svg",
    ];
    const ratings = [4.5, 3.8, 4.9, 4.2, 4.0];

    const randomIndex = Math.floor(Math.random() * names.length);

    return {
        id: new Date().toString(),
        name: names[randomIndex],
        author: authors[randomIndex],
        rating: ratings[randomIndex],
        description: generateRandomDescription(),
        readerReviews: generateRandomReaderReviews(),
        cover: coverBook[randomIndex],
        isWatched: false,
    };
}

function generateRandomDescription() {
    const descriptions = [
        "A timeless classic that explores the American Dream.",
        "A gripping novel addressing social injustice in the South.",
        "A dystopian masterpiece that warns of totalitarianism.",
        "An enduring love story with a touch of satire.",
        "A coming-of-age tale with a rebellious protagonist.",
    ];

    const randomIndex = Math.floor(Math.random() * descriptions.length);
    const multiplyString = descriptions[randomIndex];
    return multiplyString.repeat(10);
}

function generateRandomReaderReviews() {
    const numberOfReviews = Math.floor(Math.random() * 10) + 1;
    const reviews = [];

    for (let i = 0; i < numberOfReviews; i++) {
        reviews.push({
            username: `User${i + 1}`,
            comment: generateRandomReviewComment(),
            rating: Math.floor(Math.random() * 5) + 1,
        });
    }

    return reviews;
}

function generateRandomReviewComment() {
    const comments = [
        "Excellent read! Couldn't put it down.",
        "Thought-provoking and beautifully written.",
        "Not my cup of tea, but others may enjoy it.",
        "A classic that stands the test of time.",
        "Entertaining from start to finish.",
    ];

    const randomIndex = Math.floor(Math.random() * comments.length);
    return comments[randomIndex];
}

export function generateMockBooks(): BookType[] {
    return Array.from({ length: 10 }, generateRandomBook);
}
