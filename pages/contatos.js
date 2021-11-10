import Head from "next/head"
import Menu from "../component/Menu"

function Contatos() {
    return (
        <div>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site do cgrupo JPX" />
                <meta name="author" content="Manoel Estevam MasterDev" />
                <title>CONTATOS</title>
            </Head>
            <Menu />
            <h1>CONTATOS</h1>
        </div>
    )
}

export default Contatos