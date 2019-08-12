import getLocalStorage from '../utils/getLocalStorage'
import removeFromLocalStorage from '../utils/removeFromLocalStorage'

function guardadosController() {
    getLocalStorage('STAPIChar', '.characters')
    $('.table').on('click', '.btn', function () {
        var row = $(this).closest('tr')
        var elementID =  $(this).attr("id")
        removeFromLocalStorage('STAPIChar', elementID)
        $(row).remove();
    });
}

export default guardadosController