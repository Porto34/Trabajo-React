import './contacto.css';

function Contacto (props){
    return(
        <>
        <a name="Contacto">
        <section>
        <div className='Body'>
            <div className="container">
                <div className="row">
                    <h1 className="text-center">Contactos</h1>
                    <div className="col-sm-12 col-lg-3 my-5 text-center">
                        <div className="">
                            <a href="https://www.instagram.com/deibydposada/?next=%2F" target="_blank"><img
                                    className="ins img-fluid" src="./img/insta.png" alt=""/>
                                <p className="text-center">@Smile_dp</p>
                            </a>
                        </div>


                        <div className="">
                            <div className="">
                                <img className="fac mt-5" src="./img/face.png" alt=""/>
                                <p className=""/>Smile_dp<p/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 text-center my-auto">
                        <img src="./img/Smile logo.png" alt="" className="text-center w-50"/>
                    </div>
                    <div className="col-sm-12 col-lg-3 my-5 text-center ms-auto">

                        <div className="">
                            <div className="">
                                <img className="wp" src="./img/wp.png" alt=""/>
                                <p className="">3013154238</p>
                            </div>
                        </div>

                        <div className="">
                            <div className="">
                                <img className="cor mt-5" src="./img/correo.png" alt=""/>
                                <p class=""> dp_smile@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </section>
    </a>
        </>
    )
}
export default Contacto