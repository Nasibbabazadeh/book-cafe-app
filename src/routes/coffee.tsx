import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/coffee')({
    component: CoffeeComponent,
})

function CoffeeComponent() {
    return <div>Hello "/coffee"!</div>
}
