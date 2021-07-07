import swaggerJsdoc from "swagger-jsdoc"

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      version: "1.0.0",
      title: "API do sistema Valoriza",
      description: "Documentação dos serviços disponiveis para a api, com objetivo de melhorar a comunicação entre front e back, mas também para serviços de terceiros.",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/"
      },
      contact: {
        name: "Gerson Viana Marques",
        url: "https://github.com/VianaGerson",
        email: "vianagerson2011@gmail.com"
      }
    },
    host: `http://${process.env.HOST}:${process.env.PORT}`,
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          name: 'Authorization',
          bearerFormat: 'JWT',
          in: 'header'
        }
      }
    }
  },
  apis: ['src/controllers/*.ts', 'src/entities/*.ts'],
})