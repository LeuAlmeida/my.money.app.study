import React from 'react'

export default props => (
    <footer className='main-footer'>
        <strong>
            Copyright &copy; {new Date().getFullYear()}
            <a href="http://webid.net.br" target='_blank'> WebID</a> | All rights reserved.
        </strong>
        <strong className='text-right'>
        <i className='fab fa-github'></i>
        </strong>
    </footer>
)