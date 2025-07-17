import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/books')({
    component: BooksComponent,
})

function BooksComponent() {
    return <div>Hello "/books"!</div>
}
