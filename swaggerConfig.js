const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'My API',
            description:'API REST para operaciones CRUD de una base de datos',
            version:'1.0.0'
        },
        servers:[{
            url: 'http://localhost:3000/api'
        }]
    },
    apis:['./routes.js']
}

const swaggerSpec= swaggerJsdoc(options);
const swaggerDocs=(app,port)=>{
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Documentación disponible en http://localhost:${port}/api-docs`);
}

module.exports = { swaggerDocs };