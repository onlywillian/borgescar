import { useRouter } from "next/router"

export default function Car() {
    const { query } = useRouter()

    return <h1>Esse é o carro {query.id}</h1>
}