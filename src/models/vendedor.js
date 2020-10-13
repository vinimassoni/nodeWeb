module.exports = app => {
    let VendedoresSchema = app.db.mongoose.Schema({
        nome: {
            type: String,
            required: [true, 'é obrigatório']
        },
        documento: {
            type: String,
            required: [true, 'é obrigatório'],            
        },
        endereco: {
            type: String,
            required: [true, 'é obrigatório']
        }
    })
    app.db.mongoose.model("Vendedores", VendedoresSchema)
}