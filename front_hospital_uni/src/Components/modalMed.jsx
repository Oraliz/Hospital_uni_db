import { useState } from 'react'
import './modal.css'


function ModalEditarM({ isOpen, onClose}) {
    if (!isOpen) return null;

    return (
    <>
    <div className="Modal">
        <div className='modalContenido'>
            <div className='modalEncabezado'>
                <h2>Editar Medicamentos</h2>
                <button className='btnCerrar' onClick={onClose}>X</button>
            </div>

            <div className="cuerpoModal">
                <form>
                    <div className="columnas">
                        <div className="col1">
                            <h4 className='campos'>Nombre Comercial</h4>
                            <input type="text" placeholder="Nombre Comercial" />
                            <h4 className='campos'>Stock</h4>
                            <input type="number" placeholder="Stock" />
                            <h4 className='campos'>Precio Unitario</h4>
                            <input type="number" placeholder="Precio Unitario" />
                            <h4 className='campos'>Vía administracion</h4>
                            <input type="text" placeholder="Vía administracion" />
                            <h4 className='campos'>En venta</h4>
                            <input type="text" placeholder="En venta" />
                            <h4 className='campos'>ID Laboratorio</h4>
                            <input type="email" placeholder="Correo" />
                        </div>

                        <div className="col2">
                            <h4 className='campos'>Requiere Receta</h4>
                            <input type="text" placeholder="Receta" />
                            <h4 className='campos'>Fecha Caducidad</h4>
                            <input type="text" placeholder="País de Origen" />
                            <h4 className='campos'>Unidad Empaque</h4>
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

)}

export default ModalEditarM


/*import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ModalEditar from './modalDoc'
import ModalEditarD from './modalMed'

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>

      <div className='button-header'>
        <button onClick={() => setIsOpen(true)} className='icon-button'> EditarDoctor</button>
      </div>
      <ModalEditar isOpen={isOpen} onClose={() => {setIsOpen(false); }} />

      <div className='button-header'>
        <button onClick={() => setIsOpen(true)} className='icon-button'> EditarMedicamento</button>
      </div>
      <ModalEditarD isOpen={isOpen} onClose={() => {setIsOpen(false); }} />


    </>
  )
}

export default App*/