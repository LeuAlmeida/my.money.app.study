const restful = require('node-restful')
const mongoose = restful.mongoose

const clientsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, min: 1, max: 36, required: true },
    celular: { type: Number, required: false },
    cep: { type: String, required: false },
    endereco: { type: String, required: false },
    enderecoNum: { type: Number, required: false },
    enderecoCompl: { type: String, required: false},
    enderecoBairro: { type: String, required: false },
    enderecoCidade: { type: String, required: false },
    enderecoUF: { type: String, min: 2, max: 2, required: false},
    placaVeiculo: { type: String, required: false},
    corVeiculo: { type: String, required: false},
    marcaVeiculo: { type: String, required: false },
    modeloVeiculo: { type: String, required: false },
    anoVeiculo: { type: String, required: false },
    equipamentoId: { type: String, required: true },
    equipamentoChip: { type: Number, required: true },
    equipamentoLocal: { type: String, required: true },
    empresa: { type: String, required: false },
    instalacaoDt: { type: String, required: false },
    manutencaoDt: { type: String, required: false },
    possui0800: { type: String, min: 3, max: 3},
    monitoramentoValor: { type: Number, required: false},
    usuarioCliente: { type: String, required: true },
    senhaCliente: { type: String, required: true },
    situacaoCliente: { type: String, required: false},
    vigenciaContrato: { type: Number, required: false},
    inicioContrato: { type: String, required: false },
    terminoContrato: { type: String, required: false },
    vendedorNome: { type: String, required: false },
    observacoes: { type: String, required: false }

})

module.exports = restful.model('Clients', clientsSchema)
