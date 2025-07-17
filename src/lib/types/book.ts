import type { TNullable } from "./util";

export interface IAuthor {
    name: string;
    birth_year: number;
    death_year: number;
}

export interface IBookDetails {
    id: number;
    title: string;
    authors: IAuthor[];
    summaries: string[];
    translators: string[];
    subjects: string[];
    bookshelves: string[];
    languages: string[];
    copyright: boolean;
    media_type: string;
    formats: {
        [key: string]: string;
    };
    download_count: number;
}

export interface IBooksApiResponse {
    results: IBookDetails[];
    count: number,
    next: TNullable<string>,
    previous: TNullable<string>,
}
