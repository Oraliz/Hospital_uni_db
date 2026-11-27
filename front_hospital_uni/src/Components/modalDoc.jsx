import { useState } from 'react'
import './modal.css'


function ModalEditarD({ isOpen, onClose}) {
  if (!isOpen) return null;

  return (
    <>

    <div className="Modal">
      <div className='modalContenido'>
        <div className='modalEncabezado'>
          <h2>Editar doctores</h2>
          <button className='btnCerrar' onClick={onClose}>X</button>
        </div>

        <div className="cuerpoModal">
          <form>
            <div className="columnas">
              <div className="col1">
                <h4 className='campos'>Cedula</h4>
                <input type="text" placeholder="Cedula" />
                <h4 className='campos'>Nombre</h4>
                <input type="text" placeholder="Nombre" />
                <h4 className='campos'>Apellido Paterno</h4>
                <input type="text" placeholder="Apellido Paterno" />
                <h4 className='campos'>Apellido Materno</h4>
                <input type="text" placeholder="Apellido Materno" />
                <h4 className='campos'>Telefono</h4>
                <input type="tel" placeholder="Telefono" />
                <h4 className='campos'>Correo</h4>
                <input type="email" placeholder="Correo" />
              </div>

              <div className="col2">
                <h4 className='campos'>Codigo Postal</h4>
                <input type="text" placeholder="Codigo Postal" />
                <h4 className='campos'>País de Origen</h4>
                <input type="text" placeholder="País de Origen" />
                <h4 className='campos'>Estado</h4>
                <input type="text" placeholder="Estado" />
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

  )
}

export default ModalEditarD
