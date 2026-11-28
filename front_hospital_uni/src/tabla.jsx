import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import ModalEditarM from "./Components/modalMed";

function Tabla() {
    const [isOpen, setIsOpen] = useState(false);

    const [medicamentos] = useState([
        {
            id: 1,
            nombre_comercial: "Paracetamol",
            stock: 100,
            precio_unitario: 5.50,
            via_administracion: "Oral",
            en_venta: true,
            id_laboratorio: "LAB001",
            requiere_receta: false,
            fecha_caducidad: "2027-05-10",
            unidades_empaque: 20
        },
        {
            id: 2,
            nombre_comercial: "Amoxicilina",
            stock: 50,
            precio_unitario: 12.75,
            via_administracion: "Oral",
            en_venta: true,
            id_laboratorio: "LAB002",
            requiere_receta: true,
            fecha_caducidad: "2026-12-31",
            unidades_empaque: 30
        }
    ]);

    const [medicamentoSeleccionado, setMedicamentoSeleccionado] = useState(null);

    const seleccionarMedicamento = (medicamento) => {
        setMedicamentoSeleccionado(medicamento);
    };

    const eliminarMedicamento = () => {
        if (medicamentoSeleccionado) {
            console.log("Eliminar:", medicamentoSeleccionado);
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Tabla de Medicamentos</h1>

            <div className="mb-3">
                <div className='btn-EditMedicamento'>
                    <button onClick={() => setIsOpen(true)} className='icon-button'> Editar Medicamento</button>
                </div>
                <ModalEditarM isOpen={isOpen} onClose={() => {setIsOpen(false); }} />



                <button
                    className="btn btn-danger"
                    disabled={!medicamentoSeleccionado}
                    onClick={eliminarMedicamento}
                >
                    <FaTrash /> Eliminar
                </button>
            </div>

            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nombre Comercial</th>
                        <th>Stock</th>
                        <th>Precio</th>
                        <th>Vía Administración</th>
                        <th>En Venta</th>
                        <th>Laboratorio</th>
                        <th>Requiere Receta</th>
                        <th>Fecha Caducidad</th>
                        <th>Unidades Empaque</th>
                    </tr>
                </thead>
                <tbody>
                    {medicamentos.map((medicamento) => (
                        <tr
                            key={medicamento.id}
                            onClick={() => seleccionarMedicamento(medicamento)}
                            style={{
                                cursor: "pointer",
                                backgroundColor:
                                    medicamentoSeleccionado?.id === medicamento.id
                                        ? "#d4edda"
                                        : ""
                            }}
                        >
                            <td>{medicamento.id}</td>
                            <td>{medicamento.nombre_comercial}</td>
                            <td>{medicamento.stock}</td>
                            <td>${medicamento.precio_unitario}</td>
                            <td>{medicamento.via_administracion}</td>
                            <td>{medicamento.en_venta ? "Sí" : "No"}</td>
                            <td>{medicamento.id_laboratorio}</td>
                            <td>
                                {medicamento.requiere_receta ? "Sí" : "No"}
                            </td>
                            <td>{medicamento.fecha_caducidad}</td>
                            <td>{medicamento.unidades_empaque}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tabla;