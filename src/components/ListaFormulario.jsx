const ListaFormulario = () => {
    return (
        <>
       <div className="container">
         <h2 className="text-center">Escribenos a Cualquiera de Nuestros Medios</h2>
             <div className="d-flex flex-column flex-md-row p-4 gap-5 py-md-1 align-items-center justify-content-center">
                 <div className="list-group">
                     <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                             <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                         </svg>
        
                         <div className="d-flex gap-2 w-100 justify-content-between">
                             <div>
                                 <h6 className="mb-0">Correo Electronico</h6>
                                 <p className="mb-0 ">servipagosduitama@outlook.com</p>
                             </div>
                         </div>
                     </a>
                     <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                             <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                         </svg>
                         <div className="d-flex gap-2 w-100 justify-content-between">
                             <div>
                                 <h6 className="mb-0">Telefono Fijo</h6>
                                 <p className="mb-0">(608)7660819</p>
                             </div>
                         </div>
                     </a>
                     <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                             <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                             <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                         </svg>
                         <div className="d-flex gap-5 w-100 justify-content-between">
                             <div>
                                 <h6 className="mb-0">Celular</h6>
                                 <p className="mb-0 ">3185528089</p>
                             </div>
                         </div>
                     </a>
                 </div>
             </div>
       </div>
        </>
    )
}
export default ListaFormulario;