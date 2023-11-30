import Fachada from '../images/Fachada.png';

const HeroNosotros = () => {
    return (
        <>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={Fachada} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="200" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">¿Quiénes Somos?</h1>
                        <p className="lead">Empresa líder de Boyacá en el recaudo y pago de servicios públicos y
                            domiciliarios tales como luz, agua, gas natural, teléfono, tv cable, aportes a salud con entidades públicas
                            o privadas con 20 años de experiencia en atención al público.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroNosotros;

