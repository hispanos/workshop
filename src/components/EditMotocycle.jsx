import React from 'react'

const EditMotocycle = () => {
    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Modificar Motocycle</h1>

            <form
                className="mt-5"
            >
                <div className="form-group">
                    <label>Marca
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        placeholder="marca"
                      
                    />
                    </label>
                </div>

                <div className="form-group">
                    <label>Modelo
                    <input
                        type="numbre"
                        className="form-control"
                        name="modelo"
                        placeholder="modelo"
                    />
                    </label>
                </div>
                <div className="form-group">
                    <label>Referencia
                    <input
                        type="text"
                        className="form-control"
                        name="ref"
                        placeholder="Referencia"
                    />
                    </label>
                </div>
                <div className="form-group">
                    <label>Precio</label>
                    <input
                        type="number"
                        className="form-control"
                        name="precio"
                        placeholder="Precio"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="image"
                        className="form-control"
                        name="precio"
                        placeholder="Precio"
                        src="https://http2.mlstatic.com/D_NQ_NP_846545-MCO43742085875_102020-O.webp"
                    />
                </div>
                <input type="submit" className=" text-white mt-5 btn btn-outline-info" value="Guardar" />
            </form>
        </div>
    )
}

export default EditMotocycle;
