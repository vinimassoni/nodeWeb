module.exports = app => {
    let ClientesSchema = app.db.mongoose.Schema({
        nome: {
            type: String,
            required: [true, 'é obrigatório']
        },
        cpf: {
            type: String,
            required: [true, 'é obrigatório'],
        },
        telefone: {
            type: String,
            required: [true, 'é obrigatório'],
        },
        endereco: {
            type: String,
            required: [true, 'é obrigatório']
        }
    })
    app.db.mongoose.model("Clientes", ClientesSchema)
}