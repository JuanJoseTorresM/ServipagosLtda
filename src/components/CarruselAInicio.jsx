import Banco from '../images/LogoBancoBogota.png';
import Ebsa from '../images/LogoEbsa.jpg';
import Empo from '../images/LogoEmpoduitama.png';
import Aval from '../images/LogoGrupoAval.png';
import Vanti from '../images/LogoVanti.jpg';

const CarruselAInicio = () => {
    return (
        <>
            <div id="myCarousel2" className="carousel slide text-center" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                    <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                    <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="3" aria-label="Slide 4" className=""></button>
                    <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="4" aria-label="Slide 5" className=""></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Banco} className="d-block mx-auto" width="60%" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={Ebsa} className="d-block mx-auto" width="60%" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={Empo} className="d-block mx-auto" width="60%" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={Aval} className="d-block mx-auto" width="60%" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={Vanti} className="d-block mx-auto" width="60%" alt="..."></img>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel2" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel2" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </div>
        </>
    )
};
export default CarruselAInicio;

