import Link from "next/link"

export default ({ text }) => {

    return (
        <div>
            <header>
                <nav>
                    <Link href="/">Inicio</Link>
                    <Link href="/pagina-dos">Página dos</Link>
                    <Link href="/pagina-tres">Página tres</Link>
                    <Link href="/pagina-tres/pagina-tres-dos">Página tres - dos</Link>
                </nav>
            </header>
            <main style={{
                minHeight: "100vh",
                display: "grid",
                placeItems: "center"
            }}>
                { text }
            </main>
        </div>
    )

}