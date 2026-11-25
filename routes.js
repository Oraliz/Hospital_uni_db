const express =require('express');
const routes = express.Router();

//ENDPOINTS PARA MEDICAMENTOS
routes.get('/getMedicamentos', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('Select * from Medicamentos', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

//Listar por ID
routes.get('/getMedicamento/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('Select * from Medicamentos where id_medicamento = ?',[req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            if(rows.length===0) return res.send('Registro no encontrado')
            res.json(rows)
        })
    })
})
//Crear registro
routes.post('/addMedicamento', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body)
        conn.query('Insert into Medicamentos set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Medicamento registrado')
        })
    })
})
//Eliminar registro
routes.delete('/deleteMedicamento/:id', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('Delete from Medicamentos where id_medicamento = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Medicamento eliminado')
        })
    })
})
//Actualizar registro
routes.put('/updateMedicamento/:id', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('Update Medicamentos set ? where id_medicamento = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Medicamento actualizado')
        })
    })
})


//ENDPOINTS PARA LA TABLA DE Doctores
//Listar
routes.get('/getDoctores', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('Select * from Doctores', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})
//Listar por ID
routes.get('/getDoctor/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('Select * from Doctores where id_doctor = ?',[req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            if(rows.length===0) return res.send('Registro no encontrado')
            res.json(rows)
        })
    })
})
//Crear registro
routes.post('/addDoctor', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body)
        conn.query('Insert into Doctores set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Doctor registrado')
        })
    })
})
//Eliminar registro
routes.delete('/deleteDoctor/:id', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('Delete from Doctores where id_doctor = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Doctor eliminado')
        })
    })
})
//Actualizar registro
routes.put('/updateDoctor/:id', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('Update Doctores set ? where id_doctor = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Doctor actualizado')
        })
    })
})

module.exports=routes;
/**
 * @swagger
 * /getMedicamentos:
 *   get:
 *     summary: Obtiene todos los medicamentos
 *     tags: [Medicamentos]
 *     responses:
 *       200:
 *         description: Lista de medicamentos
 */

/**
 * @swagger
 * /getMedicamento/{id}:
 *   get:
 *     summary: Obtiene un medicamento por ID
 *     tags: [Medicamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Medicamento encontrado
 */
/**
 * @swagger
 * /addMedicamento:
 *   post:
 *     summary: Crea un medicamento
 *     tags: [Medicamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_comercial:
 *                 type: string
 *               stock:
 *                 type: integer
 *               precio_unitario:
 *                 type: number
 *                 format: float
 *               via_administracion:
 *                 type: string
 *               en_venta:
 *                 type: boolean
 *               id_laboratorio:
 *                 type: string
 *               requiere_receta:
 *                 type: boolean
 *               fecha_caducidad:
 *                 type: string
 *                 format: date
 *               unidades_empaque:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Medicamento registrado
 */
/**
 * @swagger
 * /deleteMedicamento/{id}:
 *   delete:
 *     summary: Elimina un medicamento
 *     tags: [Medicamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Medicamento eliminado
 */
/**
/**
 * @swagger
 * /updateMedicamento/{id}:
 *   put:
 *     summary: Actualiza un medicamento
 *     tags: [Medicamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del medicamento a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_comercial:
 *                 type: string
 *               stock:
 *                 type: integer
 *               precio_unitario:
 *                 type: number
 *                 format: float
 *               via_administracion:
 *                 type: string
 *               en_venta:
 *                 type: boolean
 *               id_laboratorio:
 *                 type: string
 *               requiere_receta:
 *                 type: boolean
 *               fecha_caducidad:
 *                 type: string
 *                 format: date
 *               unidades_empaque:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Registro actualizado correctamente
 *       404:
 *         description: Medicamento no encontrado
 *       500:
 *         description: Error interno del servidor
 */
//Documentación para endpoins de los dosctores
/**
 * @swagger
 * /getDoctores:
 *   get:
 *     summary: Obtiene todos los registros en la tabla Doctores
 *     tags: [Doctores]
 *     responses:
 *       200:
 *         description: Lista de doctores
 */
/**
 * @swagger
 * /getDoctor/{id}:
 *   get:
 *     summary: Obtiene un doctor por ID
 *     tags: [Doctores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Registro no encontrado
 */
/**
/**
 * @swagger
 * /addDoctor:
 *   post:
 *     summary: Crea un nuevo registro en la tabla doctores
 *     tags: [Doctores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cedula:
 *                 type: string
 *               nombre:
 *                 type: string
 *               apellido_paterno:
 *                 type: string
 *               apellido_materno:
 *                 type: string
 *               telefono:
 *                 type: string
 *               correo:
 *                 type: string
 *               codigo_postal:
 *                 type: string
 *               pais_origen:
 *                 type: string
 *               estado:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Medicamento registrado
 */
/**
 * @swagger
 * /deleteDoctor/{id}:
 *   delete:
 *     summary: Elimina un registro de la tabla doctores
 *     tags: [Doctores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Registro eliminado
 */
/**
 * @swagger
 * /updateDoctor/{id}:
 *   put:
 *     summary: Actualiza un registro de la tabla doctores
 *     tags: [Doctores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cedula:
 *                 type: string
 *               nombre:
 *                 type: string
 *               apellido_paterno:
 *                 type: string
 *               apellido_materno:
 *                 type: string
 *               telefono:
 *                 type: string
 *               correo:
 *                 type: string
 *               codigo_postal:
 *                 type: string
 *               pais_origen:
 *                 type: string
 *               estado:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Registro actualizado
 */
