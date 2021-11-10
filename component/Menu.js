import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Menu = () => {
    return (
        <div>
            <Link href="/">
                <a style={linkStyle}>HOME</a>
            </Link>
            <Link href="/grupo">
                <a style={linkStyle}>O GRUPO</a>
            </Link>
            <Link href="/servicos">
                <a style={linkStyle}>SERVIÇOS</a>
            </Link>
            <Link href="/contatos">
                <a style={linkStyle}>CONTATOS</a>
            </Link>
        </div>
    )
}

export default Menu