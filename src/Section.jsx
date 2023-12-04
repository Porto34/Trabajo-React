import './section.css';

function Section (props){
    
    return(
    <>
    <a name="Inicio">
        <section>
        <div className='Body'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="text-center">{props.inicio}</h1>
                        <div className="welcome">
                            <div className="relle d-flex flex-column justify-content-center align-items-center my-5">

                                <img src="./img/Smile logo.png" alt="" className="img-fluid logo3"/>

                            </div>
                            <h1 className="text-center">Bienvenido a Smile</h1>
                        <p className="texto text-center bg-secondary-subtle"> A pesar que en la
                            sociedad no le dan la importancia que se necesita a las personas <br/> con depresión
                            nace
                            smile para
                            concientizar e informar a las persona <br/> sobre la depresión, sus causas y la
                            importancia
                            que tiene está en
                            toda la población.</p>
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
export default Section