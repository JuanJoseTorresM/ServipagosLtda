const TimeLineNosotros = () => {
    return (
        <>
            <div className="container">
                <h2>Nuestra Historia</h2>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Fundación
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <strong>27 de Enero del 2004</strong>
                                <p>En esta fecha nace nuestra empresa Servipagos Ltda como un negocio independiente, idea de una familia boyacense con ganas de salir adelante y poder tener su propio negocio.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Contrato EBSA
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <strong>2004</strong> 
                                <p>En este mismo año nos convertimos en contratistas de la Electrificadora de Boyaca para el recaudo de las facturas de energia a nivel departamental, a partir de este contrato se formo toda nuestra empresa debido a que nos puso en el mapa para realizar convenios con otras entidades prestadoras de servicios públicos y privados, con el objetivo de recaudar sus facturas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Corresponsal Banco de Bogota
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <strong>2017</strong> 
                                <p>En este año tomamos la decisión de aliarnos con el grupo AVAL mediante la oportunidad de ser corresponsales del Banco de Bogotá, gracias a esta alianza expandimos nuestros servicios a reacaudos de manera nacional por los convenios del Banco de Bogotá y Redeban.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TimeLineNosotros;