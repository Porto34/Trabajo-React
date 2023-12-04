import './menu.css'

function Menu (props) {

    return(

        <>
        <section>
        <nav className="navbar navbar-expand-lg bg-body-tertiary border">
            <div className="container-fluid">
                <img src="./img/Smile logo.png" className='logo1' alt=""/>
                <a className="navbar-brand" href="#"></a>
                <img src="./img/Smile logo.png" alt="" className="navbar-toggler logo2"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
                <div className="collapse navbar-collapse display-6" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto ">
                        <li className="nav-item">
                            <a className="nav-link active me-5 " aria-current="page" href="#Inicio">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 " href="#Comic">Comic</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5" href="#Creadores" aria-expanded="false">
                                Creadores
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5" href="#Contacto" aria-disabled="true">Contacto</a>
                        </li>
                    </ul>
                    
                </div>
                </div>
                </nav>
        </section>
        </>
    )
}

export default Menu