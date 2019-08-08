import {
    nameValidator,
    emailValidator,
    commentValidator
} from '../utils/formValidators'

function contactController() {
    nameValidator('#nombre')
    emailValidator('#email')
    commentValidator('#comentarios')

    $(document).mousemove(function () {
        if ($('#nombre').hasClass('is-valid') && $('#email').hasClass('is-valid') && $('#comentarios').hasClass('is-valid')) {
            $('#botonEnviar').attr('disabled', false);
        } else if ($('#nombre').hasClass('is-invalid') || $('#email').hasClass('is-invalid') || $('#comentarios').hasClass('is-invalid')){
            $('#botonEnviar').attr('disabled', true);
        }
    });
}

export default contactController