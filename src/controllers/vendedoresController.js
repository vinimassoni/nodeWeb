module.exports = function(app) {
    let vendedoresModel = app.db.mongoose.model("Vendedores")

    return {
        listarVendedores: function(req, res) {
            let search = req.body.search
            vendedoresModel.find({
                nome: new RegExp(search)
            })
            .then((vendedores) => {
                res.json(vendedores)
            })
            .catch((err) => res.status(500).send(err))
        },
        adicionar: (req, res) => {
            try {
                let vendedor = new vendedoresModel(req.body)
                vendedor.save((err) => {
                    if(err)
                        res.status(500).send(`Erro ao inserir: ${err}`)
                    else
                        res.send(`Vendedor cadastrado com sucesso - Id: ${vendedor.id}`);
                });
            } catch (error) {
                res.send("Eror ao adicionar vendedor: " + error);
            }
        },
        consultarPorId: async (req, res) => {
            try {
                let id = req.params.id
                let vendedor = await vendedoresModel.findById(id)
                if(vendedor)
                    res.json(vendedor)
                else
                    res.status(404).end();
            } catch (error) {
                res.status(404).send();
            }
        },
        atualizar: (req, res) => {
            let id = req.params.id
            let vendedor = req.body
            vendedoresModel.findByIdAndUpdate(id, { $set: vendedor } , (err) => {
                if(err)
                    res.status(500).send(`Erro ao atualizar vendedor: ${err}`)
                else
                    res.send("Vendedor atualizado com sucesso")
            })
        },
        excluir: (req, res) => {
            let id = req.params.id
            vendedoresModel.findByIdAndRemove(id, (err) => {
                if(err)
                    res.status(500).send(`Erro ao excluir vendedor: ${err}`)
                else
                    res.send("Vendedor excluído com sucesso")
            })
        }
    }
}