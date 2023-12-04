import './creadores.css';

function Creadores (props){

    return(<>
    <a name="Creadores">
        <section>
        <div className='Body'>
            <div className="container">
                <div className="row">
                    <h1 className="text-center py-5">Creadores</h1>
                    <div className="col-sm-12 col-lg-4">
                        <div className="text-center py-4">
                            <img src="./img/caco.jpg" alt="" type="button"
                                className="Kev rounded-5 btn btn-secondary shadow-lg img-fluid" data-bs-toggle="modal"
                                data-bs-target="#exampleModal"/>
                            <h2>Kevin</h2>
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog ">
                                    <div className="modal-content bg-secondary-subtle">
                                        <div className="modal-header .text-light">
                                            <h1 className="ter modal-title fs-5" id="exampleModalLabel"
                                                >
                                                Kevin
                                            </h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="ter modal-body bg-body-secondary">
                                            Joven directo que trata de analizar los problemas para ver que se puede
                                            hacer,
                                            introvertido de mente abierta.
                                            Lider de equipo y diseñador.
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <div className="text-center py-4">
                            <img src="./img/Nigga.jpg" type="button"
                                className="nig rounded-5 btn btn-secondary img-fluid shadow-lg" data-bs-toggle="modal"
                                data-bs-target="#example"/>
                            <h2>Adolfo</h2>


                            <div className="modal fade" id="example" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content bg-secondary-subtle">
                                        <div className="modal-header">
                                            <h1 className="ret modal-title fs-5" id="exampleModalLabel">
                                                Adolfo
                                            </h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="ret modal-body bg-body-secondary">
                                            Es un joven dispuesto a hacer los trabajos que se le encomiendan tranquilo
                                            pero se
                                            enoja fácil, trabaja en equipo aunque no esté de acuerdo siempre.
                                            ilustrador
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <div className="text-center py-4">
                            <img src="./img/Peludo.jpg" type="button"
                                className="Dei rounded-5 btn btn-secondary img-fluid shadow-lg" data-bs-toggle="modal"
                                data-bs-target="#exampleD"/>
                            <h2>Deibyd</h2>


                            <div className="modal fade" id="exampleD" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content bg-secondary-subtle">
                                        <div className="modal-header">
                                            <h1 className="play modal-title fs-5" id="exampleModalLabel">
                                                Deibyd
                                            </h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="play modal-body bg-body-secondary">
                                            Joven tranquilo el cual le gusta solucionar o buscar la solución a los
                                            problemas y
                                            le encanta bromear con cualquier cosa.
                                            Programador
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
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
export default Creadores