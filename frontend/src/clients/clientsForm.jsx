import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './clientsActions'
import LabelAndInput from '../common/form/labelAndInput'
import LabelAndTextarea from '../common/form/labelAndTextarea'
import LabelAndAddonInput from '../common/form/labelAndAddonInput'
import LabelAndAfterAddonInput from '../common/form/labelAndAfterAddonInput'
import LabelAndAddonIcon from '../common/form/labelAndAddonIcon'
import ItemList from './itemList'
 
class ClientsForm extends Component {

    render() {
        const { handleSubmit, readOnly, equipamentos } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body '>
                    <Field name='name' cols='12 4' label='Nome' placeholder='Informe o nome do cliente' component={LabelAndInput} readOnly={readOnly} />
                    <Field name='email' component={LabelAndInput} type='email' label='E-mail' cols='12 4' placeholder='Informe o e-mail do cliente' readOnly={readOnly} />
                    <Field name='celular' component={LabelAndInput} label='Celular' cols='12 4' placeholder='Informe o celular' readOnly={readOnly} />

                    <Field name='cep' cols='6 2' label='CEP' placeholder='Informe o CEP' component={LabelAndInput} readOnly={readOnly} />
                    <Field name='endereco' component={LabelAndInput} label='Endereço' cols='12 3' placeholder='Informe o endereço do cliente' readOnly={readOnly} />
                    <Field name='enderecoNum' component={LabelAndInput} label='Número' type='number' cols='12 1' placeholder='Número' readOnly={readOnly} />
                    <Field name='enderecoCompl' component={LabelAndInput} label='Complemento' cols='12 1' placeholder='Complemento' readOnly={readOnly} />
                    <Field name='enderecoBairro' component={LabelAndInput} label='Bairro' cols='12 2' placeholder='Informe o Bairro' readOnly={readOnly} />
                    <Field name='enderecoCidade' component={LabelAndInput} label='Cidade' cols='12 2' placeholder='Cidade' readOnly={readOnly} />
                    <Field name='enderecoUF' component={LabelAndInput} label='Estado' cols='12 1' placeholder='UF' readOnly={readOnly} />

                    <Field name='placaVeiculo' cols='12 2' label='Placa' placeholder='Informe a placa do veículo' component={LabelAndInput} readOnly={readOnly} />
                    <Field name='corVeiculo' component={LabelAndInput} label='Cor' cols='12 3' placeholder='Informe a cor do veículo' readOnly={readOnly} />
                    <Field name='marcaVeiculo' component={LabelAndInput} label='Marca' cols='12 2' placeholder='Informe a marca do veículo' readOnly={readOnly} />
                    <Field name='modeloVeiculo' component={LabelAndInput} label='Modelo' cols='12 2' placeholder='Informe o modelo do veículo' readOnly={readOnly} />
                    <Field name='anoVeiculo' component={LabelAndInput} label='Ano' cols='12 3' placeholder='Informe o ano do veículo' readOnly={readOnly} />

                    <Field name='empresa' component={LabelAndInput} label='Empresa' cols='12 2' placeholder='Informe a Empresa' readOnly={readOnly} />
                    <Field name='instalacaoDt' component={LabelAndAddonIcon} icon='calendar' label='Instalação' cols='12 3' placeholder='Informe a data da instalação' readOnly={readOnly} />
                    <Field name='manutencaoDt' component={LabelAndAddonIcon} icon='calendar' label='Manutenção' cols='12 3' placeholder='Informe a data da última manutenção' readOnly={readOnly} />
                    <Field name='possui0800' component={LabelAndInput} label='Manutenção' cols='12 2' placeholder='Selecione a opção' readOnly={readOnly} />
                    <Field name='monitoramentoValor' component={LabelAndAddonInput} addon='R$' label='Valor do Monitoramento' cols='12 2' placeholder='Informe o Valor' readOnly={readOnly} />
                </div>

                <div className='box-body bg-yellow disabled color-palette'>
                    <Field name='usuarioCliente' component={LabelAndAddonIcon} icon='user' label='Usuário do Cliente' cols='12 6' placeholder='Informe o Usuário' readOnly={readOnly} />
                    <Field name='senhaCliente' component={LabelAndAddonIcon} icon='key' label='Senha do Cliente' cols='12 6' placeholder='Informe a Senha' readOnly={readOnly} />
                </div>

                <div className='box-body'>
                    <Field name='situacaoCliente' component={LabelAndInput} label='Situação' cols='12 2' placeholder='Selecione a Situação do Cliente' readOnly={readOnly} />
                    <Field name='vigenciaCliente' component={LabelAndAfterAddonInput} addon='Meses' label='Vigência' cols='12 2' placeholder='Especifique a Vigência' readOnly={readOnly} />
                    <Field name='inicioContrato' component={LabelAndAddonIcon} icon='calendar' label='Início do Contrato' cols='12 3' placeholder='Informe a Data de Início' readOnly={readOnly} />
                    <Field name='terminoContrato' component={LabelAndAddonIcon} icon='calendar' label='Término do Contrato' cols='12 3' placeholder='Informe a Data de Vencimento' readOnly={readOnly} />
                    <Field name='vendedor' component={LabelAndInput} label='Vendedor' cols='12 2' placeholder='Informe o Vendedor Responsável' readOnly={readOnly} />

                    <ItemList cols='6 6' list={equipamentos} readOnly={readOnly} field='equipamentos' legend='Equipamento' />
                    <Field name='observacoes' component={LabelAndTextarea} label='Observações' type='textarea' height='130px' cols='12 6' placeholder='Deixe suas observações' readOnly={readOnly} />
                    
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}


ClientsForm = reduxForm({form: 'clientsForm', destroyOnUnmount: false})(ClientsForm)
const selector = formValueSelector('clientsForm')
const mapStateToProps = state => ({equipamentos: selector(state, 'equipamentos')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClientsForm)