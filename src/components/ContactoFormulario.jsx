import { useState } from "react";
import Logo from '../images/IconoLogo.jpg';
const ContactoFormulario = () => {
    const [toDo, setToDo] = useState({
        name: "",
        lastname: "",
        state: "",
        priority: false,
        email: "",
        telefono: ""
    });
    //   Desestrucrturar
    const { name, lastname, state, priority, email, telefono } = toDo;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, lastname, state, priority, email, telefono);
    };
    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setToDo({
            ...toDo,
            //(e) => setToDo({ ...toDo, priority: e.target.checked })
            //[e.target.name]: e.target.value,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value,
        });
    };
    return (
        <>
            <div className="container p-2">
                <img className="d-block mx-auto" src={Logo} width="100" height="auto"></img>
            </div>
            <h1 className="text-center my-4">Contactanos</h1>
            <div className="container">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 p-4 rounded-5 shadow-lg bg-secondary bg-gradient">
                            <form onSubmit={handleSubmit}>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ingrese su Nombre"
                                    className="form-control mb-2"
                                    value={name}
                                    onChange={handleChange}
                                />

                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Ingrese su Apellido"
                                    className="form-control mb-2"
                                    value={lastname}
                                    onChange={handleChange}
                                />

                                <select
                                    name="state"

                                    className="form-select mb-2"
                                    value={state}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccione su Genero</option>
                                    <option value="Masculino">Hombre</option>
                                    <option value="Femenino">Mujer</option>
                                </select>

                                <div className="form-check mb-2">
                                    <input
                                        type="checkbox"
                                        name="priority"
                                        id="inputchechP"
                                        className="form-check-input"
                                        checked={priority}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="inputchechP">Seleccione si es Mayor de Edad</label>
                                </div>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Ingrese su Correo"
                                    className="form-control mb-2"
                                    value={email}
                                    onChange={handleChange}
                                />

                                <input
                                    type="number"
                                    name="telefono"
                                    placeholder="Ingrese su Numero de Telefono"
                                    className="form-control mb-2"
                                    value={telefono}
                                    onChange={handleChange}
                                />

                                {/* Boton de enviar */}
                                <button type="submit" className="form-control mb-2 btn btn-success">
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
};
export default ContactoFormulario;
