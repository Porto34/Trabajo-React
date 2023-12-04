import './comic.css';

function Comic (props){
    return(
        <>
          <a name="Comic">
        <section>
        <div className='Body'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-xl-6 d-flex flex-column justify-content-center align-items-center">
                        <div className="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="conte modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="imageModalLabel">Comic completo</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">

                                            <ol className="carousel-indicators">
                                                <li data-bs-target="#imageCarousel" data-bs-slide-to="0" class="active">
                                                </li>
                                                <li data-bs-target="#imageCarousel" data-bs-slide-to="1"></li>
                                                <li data-bs-target="#imageCarousel" data-bs-slide-to="2"></li>
                                                <li data-bs-target="#imageCarousel" data-bs-slide-to="3"></li>
                                            </ol>

                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src="./img/Bully.png" class="d-block w-100" alt="Imagen 1"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="./img/avenida.png" class="d-block w-100" alt="Imagen 2"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="./img/encuen.png" class="d-block w-100" alt="Imagen 2"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="./img/pen.png" class="d-block w-100" alt="Imagen 2"/>
                                                </div>
                                            </div>

                                            <a className="carousel-control-prev" href="#imageCarousel" role="button"
                                                data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Anterior</span>
                                            </a>
                                            <a className="carousel-control-next" href="#imageCarousel" role="button"
                                                data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Siguiente</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="ms-auto">Comic</h1>
                        <p id="merte" className="display-4">Primera escena</p>
                        <div id="comicCarousel" className="carousel" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./img/Bully.png" className="d-block w-100" alt="Imagen 1"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="./img/avenida.png" className="d-block w-100" alt="Imagen 2"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="./img/encuen.png" className="d-block w-100" alt="Imagen 2"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#comicCarousel" role="button" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </a>
                            <a className="carousel-control-next" href="#comicCarousel" role="button" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Siguiente</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-12 col-xl-6 my-auto text-center bg-secondary-subtle rounded-5">
                        <h1 className="Res">{props.sinopsis}</h1>
                        <p className="ainop text-center">Andres fue un chico que tuvo un pasado un poco difícil ya que
                            sufría de
                            bullying muy
                            fuerte en el colegio eso le afectaba psicológicamente y en el transcurso de su crecimiento
                            conoció a una persona experimentada que lo ayudo demasiado para que Andres mejorara
                            en el aspecto mental y en la vida y Andres al ver a sus allegados mal y al borde de la
                            depresión decide aconsejarlos y ayudarlos para que no se sientan solos y
                            aunque sabe que no les soluciona sus problemas por completo trata de hacerlos sentir mejor.
                        </p>
                        <button type="button" className="btn btn-primary text-center" data-bs-toggle="modal"
                            data-bs-target="#imageModal">
                            comic completo
                        </button>
                    </div>
                    <div className="col-sm-12 col-xl-12n">
                        <img className="molest" src="./img/Bully.png" alt=""/>
                        <img className="camin" src="./img/avenida.png" alt=""/>
                        <img className="descu" src="./img/encuen.png" alt=""/>
                        <img className="sand" src="./img/pen.png" alt=""/>
                    </div>



                </div>
            </div>
            </div>
        </section>
    </a>
        </>
    )
}
export default Comic