module.exports = (app) => {
    app.get("/vendedores", app.controllers.vendedoresController.listarVendedores)
    app.get("/vendedores/:id", app.controllers.vendedoresController.consultarPorId)
    app.post("/vendedores", app.controllers.vendedoresController.adicionar)
    app.put('/vendedores/:id', app.controllers.vendedoresController.atualizar)
    app.delete('/vendedores/:id', app.controllers.vendedoresController.excluir)
}