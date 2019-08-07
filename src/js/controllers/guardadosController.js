import getLocalStorage from '../utils/getLocalStorage'

function guardadosController() {
    getLocalStorage('STAPIChar', '.characters')
}

export default guardadosController