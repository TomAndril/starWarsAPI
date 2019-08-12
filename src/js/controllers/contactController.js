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

    function postData (url, data, cbk) {
        $.ajax({
          url: url,
          method: 'POST',
          data: data
        })
          .done(function (data) {
            cbk(null, data)
          })
          .fail(function (error) {
            cbk(error)
          })
      }

      var sendButton = $('#botonEnviar')

      sendButton.click(function () {
        var firstName = $('#nombre').val()
        var email = $('#email').val()
        var comments = $('#comentarios').val()
    
        var data = {
          firstName: firstName,
          email: email,
          comments: comments
        }
    
        postData('./simpleEmail.php', data, function (error, data) {
        })
      })
}

export default contactController