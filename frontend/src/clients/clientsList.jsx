import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './clientsActions'

class ClientsList extends Component {
    
    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(cl => (
            <tr key={cl._id}>
                <td>{cl.name}</td>
                <td>{cl.situacaoCliente}</td>
                <td>{cl.placaVeiculo}</td>
                <td>{cl.celular}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(cl)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(cl)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome do Cliente</th>
                            <th>Status</th>
                            <th>Placa</th>
                            <th>Telefone para Contato</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.clients.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClientsList)