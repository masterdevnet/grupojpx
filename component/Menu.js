import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'

const linkStyle = {
    marginRight: 15
}

const Menu = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo">
                        <a href="/">
                            <Image src={logo} alt="Grupo JPX" />
                        </a>
                    </div>
                    <ul className="menu">
                        <li>
                            <a href="/" className="menu-link">HOME</a>
                        </li>
                        <li>
                            <a href="/grupo" className="menu-link">O GRUPO</a>
                        </li>
                        <li>
                            <a href="/servicos" className="menu-link">SERVIÇOS</a>
                        </li>
                        <li>
                            <a href="/contatos" className="menu-link">CONTATOS</a>
                        </li>
                    </ul>
                    <div className="menu-link">
                        menu
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu