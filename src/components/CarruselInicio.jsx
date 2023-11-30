import Banner1 from '../images/Banner1.jpg';
import Banner2 from '../images/Banner2.jpg';
import Banner3 from '../images/Banner3.jpg';

const CarruselInicio = () => {
    return (
        <>
            <div id="myCarousel" className="carousel slide text-center" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Banner2} classNameName="d-block mx-auto" width="65%" ></img>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner3} classNameName="d-block mx-auto" width="65%" ></img>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner1} classNameName="d-block mx-auto" width="65%" ></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </>
    )
}
export default CarruselInicio;

