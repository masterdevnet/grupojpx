import Head from 'next/head'
import Menu from '../component/Menu'
// import Navbar from '../component/Navbar'

function Home() {
    return (
        <div>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site do cgrupo JPX" />
                <meta name="author" content="Manoel Estevam MasterDev" />
                <title>GRUPO JPX - BEM VINDO</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,700&display=swap" rel="stylesheet" /> 
            </Head>
            <Menu />
            {/* <Navbar /> */}

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="custom.js"></script>
            
        </div>
    )
}

export default Home