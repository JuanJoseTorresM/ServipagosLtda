import { NavLink } from 'react-router-dom';
import Quienes from '../images/QuienesSomos.png';


const CardsInicio = () => {
    return (
        <>
            <div className="container">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">¿Quiénes Somos?</h3>
                                <br />
                                <p className="card-text mb-auto">Empresa líder de Boyacá en recaudo de servicios públicos con 20 años de experiencia en atención al público.</p>
                                <br />
                                <br />
                                <NavLink className="icon-link gap-1 icon-link-hover stretched-link" to="/nosotros">
                                    Seguir Leyendo
                                </NavLink>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img
                                    src={Quienes}
                                    width="250"
                                    height="200"
                                    className="bd-placeholder-img"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">Contacto</h3>
                                <br />
                                <p className="mb-auto">Correo: servipagosduitama@outlook.com </p>
                                <p />
                                <p>Telefono Fijo: (608)7660819</p>
                                <p>Celular: 3185528089</p>
                                <NavLink className="icon-link gap-1 icon-link-hover stretched-link" to="/contacto">
                                    Más Información
                                </NavLink>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img
                                    src="https://t1.uc.ltmcdn.com/es/posts/0/8/7/como_encontrar_las_mejores_formas_de_contacto_de_las_empresas_50780_600.jpg"
                                    width="250"
                                    height="200"
                                    className="bd-placeholder-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardsInicio;