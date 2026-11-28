import { useState } from 'react'
import './modal.css'


function ModalEditarM({ isOpen, onClose}) {
    if (!isOpen) return null;

    return (
    <>
    <div className="Modal">
        <div className='modalContenido'>
            <div className='modalEncabezado'>
                <h2 className='modalTitulo'>Editar Medicamentos</h2>
                <button className='btnCerrar' onClick={onClose}>X</button>
            </div>

            <div className="cuerpoModal">
                <form>
                    <div className="columnas">
                        <div className="col1">
                            <h4 className='campos'>Nombre Comercial</h4>
                            <input className='int-m' type="text" placeholder="Nombre Comercial" />
                            <h4 className='campos'>Stock</h4>
                            <input className='int-m' type="number" placeholder="Stock" />
                            <h4 className='campos'>Precio Unitario</h4>
                            <input className='int-m' type="number" placeholder="Precio Unitario" />
                            <h4 className='campos'>Vía administracion</h4>
                            <input className='int-m' type="text" placeholder="Vía administracion" />
                            <h4 className='campos'>En venta</h4>
                            <input className='int-m' type="text" placeholder="En venta" />
                            <h4 className='campos'>ID Laboratorio</h4>
                            <input className='int-m' type="email" placeholder="Correo" />
                        </div>

                        <div className="col2">
                            <h4 className='campos'>Requiere Receta</h4>
                            <input className='int-m' type="text" placeholder="Requiere Receta" />
                            <h4 className='campos'>Fecha Caducidad</h4>
                            <input className='int-m' type="text" placeholder="Fecha Caducidad" />
                            <h4 className='campos'>Unidad Empaque</h4>
                            <input className='int-m' type="text" placeholder="Unidad Empaque" />
                        </div>
                    </div>


                    <div classname="Btn-Guardar">
                        <button type='button' className='buttonGuardar'>Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>

)}

export default ModalEditarM
