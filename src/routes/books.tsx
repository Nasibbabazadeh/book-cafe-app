import Book from '@/components/book/book'
import { queryClient } from '@/lib/integrations/query'
import { book } from '@/lib/queries/book'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/books')({
    component: BooksComponent,
    loader: async () => {
        queryClient.prefetchQuery(
            book.books()
        )
    }
})

function BooksComponent() {
    return <Book />
}
