import { book } from "@/lib/queries/book"
import { useQuery } from "@tanstack/react-query"

export default function Book() {
    const { data: books, isLoading } = useQuery(book.books())

    if (isLoading) {
        return <div>Loading...</div>
    }
    console.log(books)
    return (
        <div>
            <h1>Book Component</h1>
        </div>
    )
}