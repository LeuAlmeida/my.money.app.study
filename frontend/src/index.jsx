import React from 'react' // Importa o React
import ReactDOM from 'react-dom' // Importa o React para visualização no browser
import { applyMiddleware, createStore } from 'redux' // Importa o Create Store que pertence ao Redux
import { Provider } from 'react-redux' // Importa a integração do React com o Redux

import promise from 'redux-promise'
import multi from 'redux-multi' // Middleware que permite dispatch através de array de actions
import thunk from 'redux-thunk'

import App from './main/app' // Importa a aplicação 
import reducers from './main/reducers' //Importa os Reducers criados

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools) // Chama todos os Reducers para envolver a aplicação em <App /> com o <Provider> puxando essa constante

ReactDOM.render(
// Renderiza a aplicação na DOM
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))